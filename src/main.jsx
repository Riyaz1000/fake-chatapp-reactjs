import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import HomePage from "./Pages/HomePage.jsx";
import HomePageBak from "./Pages/HomePageBak.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <HomePage /> */}
    <HomePageBak />
  </React.StrictMode>
);
