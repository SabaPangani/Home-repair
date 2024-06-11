import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "home", element: <Home /> }],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
