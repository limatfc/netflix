import React from "react";
import ReactDOM from "react-dom/client";
import { AccountProvider } from "./store/AccountProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AccountProvider>
    <App />
  </AccountProvider>
);
