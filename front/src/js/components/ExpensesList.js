import React, {Component} from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import Expense from "./Expense";

export default class extends Component {
    render() {
        return (
            <div>
                <h3>My expenses</h3>
                <ListGroup>
                    {this.props.expenses.map(expense =>
                        <ListGroupItem key={expense.id}><Expense expense={expense}/></ListGroupItem>)}
                </ListGroup>
            </div>
        )
    }
}