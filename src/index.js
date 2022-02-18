import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { TagsContextProvider } from "../src/components/store/tags-context";

ReactDOM.render(
  <TagsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TagsContextProvider>,
  document.getElementById("root")
);
