import ast

def calculate_difference_using_ast(new_arr_json, upsell_arr_json):
    # Parse JSON-like strings into Python lists of dictionaries
    new_arr = ast.literal_eval(new_arr_json)
    upsell_arr = ast.literal_eval(upsell_arr_json)

    # Create a list comprehension AST node for element-wise subtraction
    subtraction_expr = ast.ListComp(
        elt=ast.BinOp(
            left=ast.Call(
                func=ast.Name(id='int', ctx=ast.Load()),
                args=[ast.Subscript(
                    value=ast.Name(id='new_arr', ctx=ast.Load()),
                    slice=ast.Index(value=ast.Name(id='i', ctx=ast.Load())),
                    ctx=ast.Load()
                )],
                keywords=[]
            ),
            op=ast.Sub(),
            right=ast.Call(
                func=ast.Name(id='int', ctx=ast.Load()),
                args=[ast.Subscript(
                    value=ast.Name(id='upsell_arr', ctx=ast.Load()),
                    slice=ast.Index(value=ast.Name(id='i', ctx=ast.Load())),
                    ctx=ast.Load()
                )],
                keywords=[]
            )
        ),
        generators=[
            ast.comprehension(
                target=ast.Name(id='i', ctx=ast.Store()),
                iter=ast.Call(
                    func=ast.Attribute(
                        value=ast.Name(id='range', ctx=ast.Load()),
                        attr='__call__',
                        ctx=ast.Load()
                    ),
                    args=[
                        ast.Call(
                            func=ast.Name(id='len', ctx=ast.Load()),
                            args=[ast.Name(id='new_arr', ctx=ast.Load())],
                            keywords=[]
                        )
                    ],
                    keywords=[]
                ),
                ifs=[]
            )
        ]
    )

    # Create an AST function definition that returns the result of the list comprehension
    ast_func_def = ast.FunctionDef(
        name='calculate_difference',
        args=ast.arguments(
            args=[
                ast.arg(arg='new_arr', annotation=None),
                ast.arg(arg='upsell_arr', annotation=None)
            ],
            vararg=None,
            kwonlyargs=[],
            kw_defaults=[],
            kwarg=None,
            defaults=[]
        ),
        body=[
            ast.Return(value=subtraction_expr)
        ],
        decorator_list=[],
        lineno=1,  # Set the lineno attribute for the FunctionDef node
        col_offset=0  # Set the col_offset attribute for the FunctionDef node
    )

    # Compile the AST into a code object
    module = ast.Module(body=[ast_func_def], type_ignores=[])
    compiled = compile(module, filename='<ast>', mode='exec')

    # Execute the compiled code within a new local namespace
    local_vars = {}
    exec(compiled, None, local_vars)

    # Return the generated function from the local namespace
    return local_vars['calculate_difference']


# Example usage:
new_arr_json = '[{"date": "2023-06-01T00:00:00.000", "new_arr": "67525"}, {"date": "2023-07-01T00:00:00.000", "new_arr": "2667420"}, {"date": "2023-08-01T00:00:00.000", "new_arr": "4496070"}, {"date": "2023-09-01T00:00:00.000", "new_arr": "5602020"}, {"date": "2023-10-01T00:00:00.000", "new_arr": "4620900"}, {"date": "2023-11-01T00:00:00.000", "new_arr": "5723930"}, {"date": "2023-12-01T00:00:00.000", "new_arr": "3095565"}, {"date": "2024-01-01T00:00:00.000", "new_arr": "1175300"}, {"date": "2024-02-01T00:00:00.000", "new_arr": "8123440"}, {"date": "2024-03-01T00:00:00.000", "new_arr": "2407175"}, {"date": "2024-04-01T00:00:00.000", "new_arr": "1865515"}, {"date": "2024-05-01T00:00:00.000", "new_arr": "0"}]'
upsell_arr_json = '[{"date": "2023-06-01T00:00:00.000", "upsell_arr": "0"}, {"date": "2023-07-01T00:00:00.000", "upsell_arr": "2399510"}, {"date": "2023-08-01T00:00:00.000", "upsell_arr": "4496070"}, {"date": "2023-09-01T00:00:00.000", "upsell_arr": "3547435"}, {"date": "2023-10-01T00:00:00.000", "upsell_arr": "865780"}, {"date": "2023-11-01T00:00:00.000", "upsell_arr": "1121280"}, {"date": "2023-12-01T00:00:00.000", "upsell_arr": "0"}, {"date": "2024-01-01T00:00:00.000", "upsell_arr": "1175300"}, {"date": "2024-02-01T00:00:00.000", "upsell_arr": "4948305"}, {"date": "2024-03-01T00:00:00.000", "upsell_arr": "0"}, {"date": "2024-04-01T00:00:00.000", "upsell_arr": "268640"}, {"date": "2024-05-01T00:00:00.000", "upsell_arr": "0"}]'

# Generate the custom AST function
# calculate_difference = calculate_difference_using_ast(new_arr_json, upsell_arr_json)

# Call the generated function with JSON-like inputs and print the result
# result = calculate_difference(new_arr_json, upsell_arr_json)
# print(result)


openingArr = [
    {
        "date": "2023-06-01T00:00:00.000",
        "new_arr": "67525"
    },
    {
        "date": "2023-07-01T00:00:00.000",
        "new_arr": "2667420"
        
    },
    {
        "date": "2023-08-01T00:00:00.000",
        "new_arr": "4496070"
        
    },
    {
        "date": "2023-09-01T00:00:00.000",
        "new_arr": "5602020"
        
    },
    {
        "date": "2023-10-01T00:00:00.000",
        "new_arr": "4620900"
    },
    {
        "date": "2023-11-01T00:00:00.000",
        "new_arr": "5723930"
    },
    {
        "date": "2023-12-01T00:00:00.000",
        "new_arr": "3095565"
    },
    {
        "date": "2024-01-01T00:00:00.000",
        "new_arr": "1175300"
    },
    {
        "date": "2024-02-01T00:00:00.000",
        "new_arr": "8123440"
    },
    {
        "date": "2024-03-01T00:00:00.000",
        "new_arr": "2407175"
    },
    {
        "date": "2024-04-01T00:00:00.000",
        "new_arr": "1865515"
    },
    {
        "date": "2024-05-01T00:00:00.000",
        "new_arr": "0"
    }
]


upsellArr = [
    {
        "date": "2023-06-01T00:00:00.000",
        "upsell_arr": "0"
    },
    {
        "date": "2023-07-01T00:00:00.000",
        "upsell_arr": "2399510"
    },
    {
        "date": "2023-08-01T00:00:00.000",
        "upsell_arr": "4496070"
    },
    {
        "date": "2023-09-01T00:00:00.000",
        "upsell_arr": "3547435"
    },
    {
        "date": "2023-10-01T00:00:00.000",
        "upsell_arr": "865780"
    },
    {
        "date": "2023-11-01T00:00:00.000",
        "upsell_arr": "1121280"
    },
    {
        "date": "2023-12-01T00:00:00.000",
        "upsell_arr": "0"
    },
    {
        "date": "2024-01-01T00:00:00.000",
        "upsell_arr": "1175300"
    },
    {
        "date": "2024-02-01T00:00:00.000",
        "upsell_arr": "4948305"
    },
    {
        "date": "2024-03-01T00:00:00.000",
        "upsell_arr": "0"
    },
    {
        "date": "2024-04-01T00:00:00.000",
        "upsell_arr": "268640"
    },
    {
        "date": "2024-05-01T00:00:00.000",
        "upsell_arr": "0"
    }
]

txt = """
def sum(a, b):
    opening_dict = {entry["date"]: int(entry["new_arr"]) for entry in a}
    upsell_dict = {entry["date"]: int(entry["upsell_arr"]) for entry in b}

# Iterate over the dates in openingArr and calculate the sum with upsellArr
    result = []

    for entry in a:
        date_str = entry["date"]
        opening_value = opening_dict[date_str]
        upsell_value = upsell_dict[date_str]
        total_value = opening_value + upsell_value
    
        result.append({
            "date": date_str,
            "total_value": total_value
        })

    print(result)

# # Print the result
#     for entry in result:
#         print(f"Date: {entry['date']}, Total Value: {entry['total_value']}")
"""


subTxt = """
def sub(a, b):
    opening_dict = {entry["date"]: int(entry["new_arr"]) for entry in a}
    upsell_dict = {entry["date"]: int(entry["upsell_arr"]) for entry in b}

# Iterate over the dates in openingArr and calculate the sum with upsellArr
    result = []

    for entry in a:
        date_str = entry["date"]
        opening_value = opening_dict[date_str]
        upsell_value = upsell_dict[date_str]
        total_value = opening_value - upsell_value
    
        result.append({
            "date": date_str,
            "total_value": total_value
        })

# Print the result
    for entry in result:
        print(f"Date: {entry['date']}, Total Value: {entry['total_value']}")
"""



mulTxt = """
def sub(a, b):
    opening_dict = {entry["date"]: int(entry["new_arr"]) for entry in a}
    upsell_dict = {entry["date"]: int(entry["upsell_arr"]) for entry in b}

# Iterate over the dates in openingArr and calculate the sum with upsellArr
    result = []

    for entry in a:
        date_str = entry["date"]
        opening_value = opening_dict[date_str]
        upsell_value = upsell_dict[date_str]
        total_value = opening_value * upsell_value
    
        result.append({
            "date": date_str,
            "total_value": total_value
        })

# Print the result
    for entry in result:
        print(f"Date: {entry['date']}, Total Value: {entry['total_value']}")
"""



tree = ast.parse(txt, mode='exec')
subTree = ast.parse(subTxt, mode='exec')
mulTree = ast.parse(mulTxt, mode='exec')
code = compile(tree, filename='', mode='exec')
subCode = compile(subTree, filename='', mode='exec')
mulCode = compile(mulTree, filename='', mode='exec')
namespace = {}
exec(code, namespace)
exec(subCode, namespace)
exec(mulCode, namespace)
print("executed")

# namespace["sum"](openingArr, upsellArr)
# namespace["sub"](openingArr, upsellArr)


