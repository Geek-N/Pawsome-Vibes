// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importing your styles
import App from './App'; // Import App component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component here */}
  </React.StrictMode>
);
