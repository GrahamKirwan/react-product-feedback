import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { TagsContextProvider } from "../src/components/store/tags-context";
import { DataContextProvider } from "../src/components/store/data-context";

ReactDOM.render(
  <DataContextProvider>
    <TagsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TagsContextProvider>
  </DataContextProvider>,
  document.getElementById("root")
);
