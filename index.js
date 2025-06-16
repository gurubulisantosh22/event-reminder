import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Nasa } from "./components/nasa/nasa.jsx";
import { ReactForm } from "./components/react-form/react-form.jsx";
import { CookiesProvider } from "react-cookie";
import { ConditionalDemo } from "./components/conditionalDemo/conditionalDemo.jsx";
import { LocalStorage } from "./components/conditionalDemo/localstorage.jsx";
import { DemoCookies } from "./components/conditionalDemo/cookies.jsx";
import { ValidateForm } from "./components/form-validation.jsx";
import { YupValidate } from "./components/yup-validation.jsx";
import { NasaApi } from "./components/nasa_api.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <React.StrictMode>
      <NasaApi />
    </React.StrictMode>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
