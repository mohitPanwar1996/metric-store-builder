import React, { useEffect } from "react";
import axios from "axios";

export default function Metrics() {
  const [metrics, setMetrics] = React.useState([]);
  const [selectedMetric, setSelectedMetric] = React.useState({});

  const getSavedFormulas = async () => {
    const formulas = await axios.get("http://localhost:8000/getFormulas", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });

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

  const getMetricData = async () => {
    const data = await axios.get();
  };

  return (
    <>
      {metrics?.length > 0 && (
        <>
          <div className="w-96 ml-2 mt-5 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Metrics</h2>
            <div className="mb-4">
              <label
                htmlFor="metricName"
                className="block text-sm font-medium text-gray-700"
              >
                Select Metric
              </label>
              <select
                value={selectedMetric.metric_name}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="w-full h-8 pl-1 border border-black-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {metrics.map((option) => (
                  <option key={option.name} value={option}>
                    {option.metric_name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#1e5385db] text-white py-2 px-4 rounded-md hover:bg-[#1e5385]"
              onClick={() => {
                getMetricData();
              }}
            >
              Get Data
            </button>
          </div>
        </>
      )}
    </>
  );
}
