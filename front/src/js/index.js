import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import Home from "./components/Home";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import App from "./components/App";
import {HOME, LOGIN, REGISTER} from "./utils/Constants";

// Import main css file
import "../css/main.css";

// Define all the routes
ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path={HOME} component={Home}/>
            <Route path={LOGIN} component={LoginContainer}/>
            <Route path={REGISTER} component={RegisterContainer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
