import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Formula from "./pages/Formula.jsx";
import Metrics from "./pages/Metrics.jsx";
import DataExplorer from "./pages/DataExplorer.jsx";
import Statements from "./pages/Statements.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "metrics",
        element: <Metrics />,
      },
      {
        path: "formulas",
        element: <Formula />,
      },
      {
        path: "data",
        element: <DataExplorer />,
      },
      {
        path: "statements",
        element: <Statements />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
