import React, {Component} from "react";
import ExpensesList from "../components/ExpensesList";
import {expensesAPI} from "../api/APIs";

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

    render() {
        return (
            <ExpensesList expenses={this.state.expenses}/>
        )
    }
}