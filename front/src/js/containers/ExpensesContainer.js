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

    updateState = (newContent) => {
        this.setState(u({
                expenses: [].concat(this.state.expenses, [newContent])
            }, this.state)
        );
    };

    render() {
        return (
            <ExpensesList expenses={this.state.expenses}
                          afterAdd={this.addExpenseToState}/>
        )
    }
}