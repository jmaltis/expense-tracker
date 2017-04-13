import React, {Component} from "react";
import {ListGroup, ListGroupItem, Button} from "react-bootstrap";
import Expense from "./Expense";
import ExpenseForm from "./form/ExpenseForm";

export default class extends Component {
    render() {
        return (
            <div>
                <div className="expensesTitle">
                    <h3>My expenses</h3>
                    <Button bsStyle="primary" onClick={() => this.openExpenseForm("Add")}>Add expense</Button>
                    <ExpenseForm ref="expenseForm"/>
                </div>
                <ListGroup>
                    {this.props.expenses.map(expense =>
                        <ListGroupItem key={expense.id}><Expense expense={expense}/></ListGroupItem>)}
                </ListGroup>
            </div>
        )
    }

    openExpenseForm = (type, expense) => {
        this.refs.expenseForm.open(type, expense);
    };
}