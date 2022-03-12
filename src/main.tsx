import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import TestComponent from "./utils/TestComponent";
import Gallery from "./components/Gallery";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Gallery />} />
          <Route path="/:page" element={<Gallery />} />
          <Route path="/test" element={<TestComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  // eslint-disable-next-line unicorn/prefer-query-selector
  document.getElementById("root")
);
