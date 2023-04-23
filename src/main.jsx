import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import apiFacade from "./components/apiFacade";
import Jokes from "./components/Joke";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Jokes />
    </Router>
  </React.StrictMode>
);
