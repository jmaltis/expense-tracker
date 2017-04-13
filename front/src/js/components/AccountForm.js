import React, {Component} from "react";
import {FormGroup, FormControl, Button} from "react-bootstrap";

export default class extends Component {
    constructor() {
        super();
        this.state = {}
    }

    // Update state with the new input value
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="accountForm">
                <FormGroup controlId="login">
                    <FormControl
                        type="text"
                        name="login"
                        value={this.state.login && this.state.login.value}
                        placeholder="Login"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    <FormControl
                        type="password"
                        name="password"
                        value={this.state.password && this.state.password.value}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit" bsStyle="primary">
                    {this.props.submitText}
                </Button>
            </form>

        )
    }
}