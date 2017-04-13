import React, {Component} from "react";
import ExpensesList from "../components/ExpensesList";
import {mockExpenses} from "../utils/MockData";

export default class extends Component {
    constructor() {
        super();
        this.state = {
            expenses: []
        }
    }

    componentDidMount() {
        this.setState({
            expenses: mockExpenses
        })
    }

    render() {
        return (
            <ExpensesList expenses={this.state.expenses} />
        )
    }
}