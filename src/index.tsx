import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

declare global {
  interface ImportMeta {
    hot: {
      accept: Function;
      dispose: Function;
    };
    env: {
      MODE: string;
      SNOWPACK_PUBLIC_NAME: string;
    };
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
