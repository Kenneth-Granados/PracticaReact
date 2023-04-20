import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import { Login } from "./LoginComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola, soy Kenneth" subtitle="Ejemplo para que siempre mande props" num={123}/> */}
    {/* <FirstApp title="Hola, Kenneth"/>*/} {/*Ejemplo para propTypes */}
    {/* <CounterApp value={10} /> */}
    <Login />
  </React.StrictMode>
);
