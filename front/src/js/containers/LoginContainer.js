import React, {Component} from "react";
import AccountForm from "../components/form/AccountForm";

export default class extends Component {
    login = (values) => {
        console.log(values);
        // TODO call backend
    };

    render() {
        return (
            <AccountForm onSubmit={this.login} submitText="Login"/>
        )
    }
}