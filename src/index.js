import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { TagsContextProvider } from "../src/components/store/tags-context";

ReactDOM.render(
  <TagsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TagsContextProvider>,
  document.getElementById("root")
);
