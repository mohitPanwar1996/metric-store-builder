import React from "react";

export default function Statements() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="ml-4 mr-4 mt-4  bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">
          Problem Statement: Formula Builder Implementation for Metric
          Calculation
        </h2>
        <p>
          Consider a scenario where a metric formula, such as{" "}
          <b>
            OFFSET((S&M Expense - Customer Marketing Expense), -1) / New
            Customers
          </b>
          , relies on data from three distinct datasets, each treated as
          separate dataframes with their own time columns. The challenge is to
          compute this formula efficiently across the combined dataframes once
          they are joined. Research has highlighted tools like Apache Flink,
          which leverages rules for applying formulas to data and conducting
          evaluations. We seek to understand how Apache Flink can address this
          problem and explore alternative tools with similar capabilities.{" "}
        </p>
        <br />
        <p className="text-wrap">
          <b>Key questions to address include:</b>
          <br />
        </p>
        <ul className="list-disc pl-5">
          <li>
            How should the formula expression be parsed correctly? <br />
          </li>
          <li>
            When computing metrics from the formula builder, each metric aligns
            with its own table and time dimension. How can these be merged and
            calculated effectively? <br />
          </li>
          <li>
            What methods ensure optimal runtime performance for metric
            computation? <br />
          </li>
          <li>
            If runtime computation isn&apos;t feasible, what alternative
            approaches or tools are recommended? <br />
          </li>
          <li>
            What technologies excel in building robust formula builders? <br />
          </li>
          <li>
            Can the pandas library in Python be leveraged to compute these
            metrics effectively? <br />
          </li>
          <li>
            The aim is to develop a clear strategy for processing complex metric
            formulas against multi-source datasets efficiently, leveraging
            appropriate technologies and methodologies. <br />
          </li>
        </ul>
      </div>
      <div className="mt-8 px-6 mx-auto">
        <h2 className="text-lg font-semibold mb-4">
          Diagram of the problem statement
        </h2>
        <img
          className="h-[700px] mx-auto border border-black-300"
          src="/problemStatement.png"
          alt="Formula"
        />
      </div>
      <div className="mt-8 px-6 mx-auto">
        <h2 className="text-lg font-semibold mb-4">Metric Catalog</h2>
        <img
          className="h-[700px] mx-auto border border-black-300"
          src="/metricCatalog.png"
          alt="Formula"
        />
      </div>
    </div>
  );
}
