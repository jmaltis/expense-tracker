import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import Home from "./components/Home";

// Define all the routes
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('app')
);
