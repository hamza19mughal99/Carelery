import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const app = <App />;

ReactDOM.render(app, document.getElementById("root"));
