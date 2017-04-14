import React, {Component} from "react";
import {FormGroup, FormControl, Button} from "react-bootstrap";

export default class extends Component {
    render() {
        const {userId, amount, datetime, description} = this.props.expense;
        return (
            <div className="expense">
                <span className="dateTime">{datetime}</span>
                <span className="amount">{amount}$</span>
                <span className="description">{description}</span>
            </div>
        )
    }
}