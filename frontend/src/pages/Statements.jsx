import React from "react";

export default function Statements() {
  return (
    <>
      <div className="mx-10 ml-4 mr-4 mt-4 mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">
          Problem Statements regarding formula builder
        </h2>
        <ul className="list-disc pl-5">
          <li className="text-wrap mb-2">
            suppose there is a metric formula like{" "}
            <strong>
              OFFSET((S&M Expense - Customer Marketing Expense), -1) / New
              Customers
            </strong>{" "}
            so than each one of the metric will be coming from 3 different
            datasets let say they will act as three different dataframes with
            there own time columns than how we will compute the expression on
            top of the data even if we are able to join the three dataframes and
            able to make them one dataframe how will the expression execute
          </li>
          <li className="mb-2 text-wrap">
            We did research on our end and found out that tools like Apache
            Flinch where we can use rules to feed formula on top of data and
            evaluate. We want to understand how Apache Flinch can help and what
            are the other tools out there that can help us with this problem.
          </li>
          <li className="mb-2">
            What will be the proper way to parse the expression?
          </li>
          <li className="mb-2">
            While calculating the metric from the formula builder each metric
            will have its own table and time dimension. How to merge and and
            compute the metric in this scenario?
          </li>
          <li className="mb-2">
            How should a metric be calculated at the run time also with better
            performance?
          </li>
          <li className="mb-2">
            If the metric is not calculated at run time than what will be the
            best way to calcuate it what are the tools out there that can help
            us with that?
          </li>
          <li className="mb-2">
            What is the best technology out there to build the formula builder?
          </li>
          <li className="mb-2">
            We are trying to use the pandas library of Python to calculate the
            metric. How can we use the pandas library to calculate the metric?
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
    </>
  );
}
