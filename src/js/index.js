//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle

//include your index.scss file into the bundle
import "../styles/App.css";

//import your own components
import { TLight } from "./component/Light";

//render your react application
ReactDOM.render(<TLight />, document.querySelector("#app"));
