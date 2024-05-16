from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import duckdb

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

formulas = {
    1: {
        "name": "MRR",
        "formula": "df.tcv / df.duration",
    },
    2: {
        "name": "ARR",
        "formula": "(df.tcv / df.duration) * 12"
    },
    3: {
        "name": "CAC",
        "formula": "round(offset(df.tcv, 5), 0)"
    },
}

duckdb_conn = duckdb.connect("expression.duckdb")

def offset(df, n):
    return df.shift(n)

def round(df, n=0):
    return df.round(n)

@app.post("/evaluateFormula")
async def evaluate_formula(request: Request):
    try:
        body = await request.json()
        formula = body.get("formula")
        metric_name = body.get("name")
        df = duckdb_conn.execute("SELECT * FROM deals").fetchdf()
        print(formula)
        eval_expression = pd.eval(f"{metric_name} = {formula}", target=df,)
        new_df = pd.DataFrame(eval_expression)
        duckdb_conn.execute("CREATE OR REPLACE TABLE deals_revised AS SELECT * FROM new_df")
        # duckdb_conn.close() 

        return {
            "message": "Data loaded successfully",
            "data": new_df.to_json(orient="records")
        }
    except Exception as e:
        print(e)



@app.post("/saveFormula", status_code=200)
async def saveFormula(request: Request):
    try:
        body = await request.json()
        formula = body.get("formula")
        metric_name = body.get("metric_name")
        print(duckdb_conn)
        sequence = duckdb_conn.execute("CREATE SEQUENCE IF NOT EXISTS id_sequence START 1;")
        duckdb_conn.execute("CREATE TABLE IF NOT EXISTS formulas (id INTEGER DEFAULT nextval('id_sequence'), formula TEXT, metric_name TEXT )")
        sql = "INSERT INTO formulas (formula, metric_name) VALUES (?, ?)"
        duckdb_conn.execute(sql, (formula,  metric_name))
        data = duckdb_conn.fetchall()
        # duckdb.close()
        return {
            "message": "Data loaded successfully",
            "data": data
        }
    except Exception as e:
        print(e)


@app.get("/getFormulas", status_code=200)
async def getFormulas(request: Request):
    try:
        data = duckdb_conn.execute("SELECT * FROM formulas").fetchdf()
        return {
            "message": "Data loaded successfully",
            "data": data.to_json(orient="records")
        }
    except Exception as e:
        print(e)


@app.post("/saveMetricData", status_code=200)
async def getFormulas(request: Request):
    try:
        body = await request.json()
        name = body.get("name")
        value = body.get("value")
        time_series_data = body.get("time_series_data")
        type = body.get("type")
        sequence = duckdb_conn.execute("CREATE SEQUENCE IF NOT EXISTS data_sequence START 1;")
        duckdb_conn.execute("CREATE TABLE IF NOT EXISTS raw_data (id INTEGER DEFAULT nextval('data_sequence'), name TEXT, value INTEGER, time_series_data JSON, type TEXT )")

        sql = "INSERT INTO raw_data (name, value, time_series_data, type) VALUES (?, ?, ?, ?)"
        duckdb_conn.execute(sql, (name,  value, time_series_data, type))
        data = duckdb_conn.fetchall()
        return {
            "message": "Data loaded successfully",
            "data": data.to_json(orient="records")
        }
    except Exception as e:
        print(e)


