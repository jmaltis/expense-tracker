import React, {Component} from "react";
import AccountForm from "../components/AccountForm";

export default class extends Component {
    register = (values) => {
        console.log(values);
        // TODO call backend
    };

    render() {
        return (
            <AccountForm onSubmit={this.register} submitText="Register"/>
        )
    }
}