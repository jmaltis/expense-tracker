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
                    <ExpenseForm ref="expenseForm" afterSave={this.afterSave}/>
                </div>
                <ListGroup>
                    {this.props.expenses.map(expense =>
                        <ListGroupItem key={expense.id}>
                            <Expense expense={expense}
                                     onEdit={this.edit}
                                     onDelete={this.delete}/>
                        </ListGroupItem>)}
                </ListGroup>
            </div>
        )
    }

    openExpenseForm = (type, expense) => {
        this.refs.expenseForm.open(type, expense);
    };

    afterSave = (type, expense) => {
        if (type == "Add") {
            this.props.afterAdd(expense);
        } else {
            this.props.afterEdit(expense);
        }
    };

    edit = (expense) => {
        this.openExpenseForm("Edit", expense);
    };

    delete = (expenseId) => {
        this.props.deleteExpense(expenseId);
    }
}