import React from "react";
import axios from "axios";

export default function Formula() {
  // const [formula, setFormula] = React.useState("");
  const [metricName, setMetricName] = React.useState("");
  const [formula, setFormula] = React.useState("");
  const [savedFormulas, setSavedFormulas] = React.useState([]);
  const [selectedFormula, setSelectedFormula] = React.useState({});

  const saveFormula = async () => {
    const saveObj = [];
  };

  const saveMetric = async () => {
    try {
      const payload = {
        metric_name: metricName,
        formula: formula,
      };
      const save = await axios.post(
        "http://localhost:8000/saveFormula",
        payload,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      alert("formula saved successfully");
      setMetricName("");
      setFormula("");
    } catch (error) {
      console.log(error);
      const message = error?.response?.data?.message || "Something went wrong";
      alert(message);
    }
  };

  const metrics = [
    {
      name: "Monthly Recurring Revenue (MRR)",
      formula: "ARPU * Total Customers",
      working: false,
    },
    {
      name: "Customer Acquisition Cost (CAC)",
      formula: "S&M Expenses / New Customers Acquired",
      working: false,
    },
    {
      name: "Annual Recurring Revenue (ARR)",
      formula: "MRR * 12",
      working: false,
    },
    {
      name: "Customer Lifetime Value (CLTV)",
      formula: "ARPU * Customer Lifetime",
      working: false,
    },
    {
      name: "Churn Rate",
      formula: "(Churned Customers / Total Customers) * 100",
      working: false,
    },
    {
      name: "Average Revenue Per User (ARPU)",
      formula: "MRR / Total Customers",
      working: false,
    },
    {
      name: "Conversion Rate",
      formula: "No of Conversions / Total Visits",
      working: false,
    },
    {
      name: "MRR",
      formula: "df.tcv / df.duration",
      working: true,
    },
    {
      name: "ARR",
      formula: "(df.tcv / df.duration) * 12",
      working: true,
    },
    {
      name: "CAC",
      formula: "round(offset(df.tcv, 5), 0)",
      working: true,
    },
  ];

  console.log(savedFormulas);
  return (
    <div className="w-[1000px] mx-auto px-4">
      <div className="mt-8 mx-auto">
        <h2>Below are the SaaS metrics that are caluclate by the formula</h2>
        <table className="w-[100%]">
          <tr>
            <th className="border border-gray-300 text-left px-2">Name</th>
            <th className="border border-gray-300 text-left px-2">Formula</th>
            <th className="border border-gray-300 text-left px-2">Working</th>
          </tr>
          {metrics.map((metric, index) => {
            return (
              <tr key={index}>
                <td className="border border-gray-300 text-left px-2">
                  {metric.name}
                </td>
                <td className="border border-gray-300 text-left px-2">
                  {metric.formula}
                </td>
                <td className="border border-gray-300 text-left px-2">
                  {metric.working ? "Yes" : "No"}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-[80%]  ml-0 mt-5 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">Add Formula</h2>
          <div className="mb-4">
            <label
              htmlFor="metricName"
              className="block text-sm font-medium text-gray-700"
            >
              Metric Name
            </label>
            <input
              type="text"
              id="metricName"
              value={metricName}
              onChange={(e) => setMetricName(e.target.value)}
              className="w-full h-8 pl-1 border border-black-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="formula"
              className="block text-sm font-medium text-gray-700"
            >
              Formula
            </label>
            <input
              type="text"
              id="formula"
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              className="mt-1 h-8 pl-1 w-full border border-black-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#1e5385db] text-white py-2 px-4 rounded-md hover:bg-[#1e5385]"
            onClick={() => {
              saveMetric();
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">
          Formulas that can be supported via Formula Builder
        </h2>
        <img src="/supportedFormulas.png" alt="Formula" />
      </div>
    </div>
  );
}
