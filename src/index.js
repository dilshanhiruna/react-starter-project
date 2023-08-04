import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// pc:begin: bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// pc:end: bootstrap

// pc:begin: redux
import { Provider } from "react-redux";
import store from "./store/store";
// pc:end: redux

// pc:begin: context-api
import { ThemeProvider } from "./providers/ThemeContext";
// pc:end: context-api

const root = ReactDOM.createRoot(document.getElementById("root"));

// pc:begin: redux
root.render(
<React.StrictMode>
<Provider store={store}>
<App />
</Provider>
</React.StrictMode>
);
// pc:end: redux

// pc:begin: context-api
root.render(
<React.StrictMode>
<ThemeProvider>
<App />
</ThemeProvider>
</React.StrictMode>
);
// pc:end: context-api

// pc:begin: zustand
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
// pc:end: zustand

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
