import React from "react";
import {Route} from "react-router";
import App from "../components/App";
import ExpensesContainer from "../containers/ExpensesContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import {HOME, LOGIN, REGISTER} from "./Constants";

export const Routes = (
    <Route component={App}>
        <Route path={HOME} component={ExpensesContainer}/>
        <Route path={LOGIN} component={LoginContainer}/>
        <Route path={REGISTER} component={RegisterContainer}/>
    </Route>
);