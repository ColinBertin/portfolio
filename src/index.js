import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageNotFound from "./components/404/PageNotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
