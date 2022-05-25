import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById("root");
const mainRoot = createRoot(container);

mainRoot.render(
  <Router>
    <App />
  </Router>
);
