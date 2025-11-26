import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import VendorLogin from "./pages/VendorLogin.jsx"; // ← we'll create this
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/vendor-login" element={<VendorLogin />} />
    </Routes>
  </BrowserRouter>
);