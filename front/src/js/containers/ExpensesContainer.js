import React, {Component} from "react";
import ExpensesList from "../components/ExpensesList";
import {expensesAPI} from "../api/APIs";
import u from "updeep";

export default class extends Component {
    constructor() {
        super();
        this.state = {
            expenses: []
        }
    }

    componentDidMount() {
        expensesAPI.getAll()
            // When success
            .then(content => {
                // Update state with the content
                this.setState({
                    expenses: content
                })
            });
    }

    addExpenseToState = (addedExpense) => {
        this.updateState(addedExpense);
    };

    editExpenseInState = (editedExpense) => {
        this.setState(u({
            expenses: this.state.expenses.map(expense => expense.id === editedExpense.id ? editedExpense : expense)
        }, this.state));
    };

    updateState = (newContent) => {
        this.setState(u({
                expenses: [].concat(this.state.expenses, [newContent])
            }, this.state)
        );
    };

    deleteExpense = (expenseId) => {
        expensesAPI.delete(expenseId)
            .then(() => {
                // Update state (remove the deleted entity)
                this.deleteFromState(expenseId);
            });
    };

    deleteFromState = (expenseId) => {
        this.setState(u({
                expenses: u.reject((expense) => expense.id == expenseId)
            }, this.state)
        );
    };

    render() {
        return (
            <ExpensesList expenses={this.state.expenses}
                          afterAdd={this.addExpenseToState}
                          afterEdit={this.editExpenseInState}
                          deleteExpense={this.deleteExpense}/>
        )
    }
}