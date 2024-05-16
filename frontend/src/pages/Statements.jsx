import React from "react";

export default function Statements() {
  return (
    <div className="mx-10 mt-4 mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Statements regarding formula builder
      </h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          What will be the proper way to parse the expression?
        </li>
        <li className="mb-2">
          While calculating the metric from the formula builder each metric will
          have its own table and time dimension. How to merge and and compute
          the metric in this scenario?
        </li>
        <li className="mb-2">
          How should a metric be calculated at the run time also with better
          performance?
        </li>
        <li className="mb-2">
          If the metric is not calculated at run time than what will be the best
          way to calcuate it what are the tools out there that can help us with
          that?
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
  );
}
