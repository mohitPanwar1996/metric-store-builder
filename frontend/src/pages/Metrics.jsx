import React, { useEffect } from "react";
import axios from "axios";

export default function Metrics() {
  const [metrics, setMetrics] = React.useState([]);
  const [metricData, setMeticData] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  const getSavedFormulas = async () => {
    const formulas = await axios.get("http://localhost:8000/getFormulas");
    const parsedFormulas = JSON.parse(formulas.data.data);
    setMetrics(parsedFormulas);
  };

  useEffect(() => {
    try {
      getSavedFormulas();
    } catch (error) {
      console.log(error);
      const message = error?.response?.data?.message || "Something went wrong";
      alert(message);
    }
  }, []);

  const getMetricData = async (metric) => {
    try {
      const data = await axios.post("http://localhost:8000/evaluateFormula", {
        formula: metric.formula,
        name: metric.metric_name,
      });
      const parseData = JSON.parse(data.data.data);
      setMeticData(parseData);
      const columns = Object.keys(parseData[0]);
      setColumns(columns);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(metricData);
  return (
    <>
      {metrics?.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto ">
            <h1 className="text-2xl mt-2">Metrics</h1>

            <div className="mt-8 mx-auto">
              <div className="mt-8 mx-auto">
                <h2>
                  Below are the SaaS metrics that are caluclate by the formula
                </h2>
                <table className="w-[100%]">
                  <tr>
                    <th className="border border-gray-300 text-left px-2">
                      Name
                    </th>
                    <th className="border border-gray-300 text-left px-2">
                      Formula
                    </th>
                    <th className="border border-gray-300 text-left px-2">
                      Action
                    </th>
                  </tr>
                  {metrics.map((metric, index) => {
                    return (
                      <tr key={index}>
                        <td className="border border-gray-300 text-left px-2">
                          {metric.metric_name}
                        </td>
                        <td className="border border-gray-300 text-left px-2">
                          {metric.formula}
                        </td>
                        <td className="border border-gray-300 text-left px-2">
                          <button
                            type="submit"
                            className="bg-[#1e5385db] text-white py-2 px-4 h-6 rounded-md hover:bg-[#1e5385] flex items-center"
                            onClick={() => {
                              getMetricData(metric);
                            }}
                          >
                            Get Data
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>

            {metricData?.length > 0 && (
              <div className="mt-8">
                <h1 className="text-xl mb-2">Metric Data</h1>
                <table className="w-[100%]">
                  <tr>
                    {columns.map((item, idx) => {
                      return (
                        <th
                          key={idx}
                          className="border border-gray-300 text-left px-2"
                        >
                          {item}
                        </th>
                      );
                    })}
                  </tr>
                  {metricData.map((metric, index) => {
                    return (
                      <tr key={index}>
                        {Object.values(metric).map((item, idx) => {
                          return (
                            <td
                              key={idx}
                              className="border border-gray-300 text-left px-2"
                            >
                              {item}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
