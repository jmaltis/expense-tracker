import React from "react";
import ReactDOM from "react-dom";
import {Router, browserHistory} from "react-router";
import {Routes} from "./utils/Routes";

// Import main css file
import "../css/main.css";

// Define all the routes
ReactDOM.render(
    <Router history={browserHistory} routes={Routes} />,
    document.getElementById('app')
);
