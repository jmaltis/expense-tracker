import React, {Component} from "react";
import {FormGroup, FormControl, Button} from "react-bootstrap";
import {toReadableString} from "../utils/Utility";

export default class extends Component {
    render() {
        const {amount, dateTime, description} = this.props.expense;
        return (
            <div className="expense">
                <span className="datetime">{toReadableString(dateTime)}</span>
                <span className="amount">{amount}$</span>
                <span className="description">{description}</span>
                <Button className="delete" onClick={() => this.delete()}>Delete</Button>
            </div>
        )
    }

    delete = () => {
        this.props.onDelete(this.props.expense.id);
    }
}