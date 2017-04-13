import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router";
import {LOGIN, REGISTER} from "../utils/Constants";

export default () => (
    <div id="header">
        <h1>Expense Tracker</h1>
        <div className="buttons">
            <Link to={LOGIN}><Button>Login</Button></Link>
            <Link to={REGISTER}><Button>Register</Button></Link>
        </div>
    </div>
)