import React, {Component} from "react";
import {Modal, Button, FormGroup, FormControl, InputGroup} from "react-bootstrap";
import u from "updeep";
import {expensesAPI} from "../../api/APIs";
import {isNumber, toISOString, toReadableString} from "../../utils/Utility";

export default class extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            type: "",
            expense: {}
        }
    }

    // Update state with the new input value
    handleChange = (e) => {
        this.setState({
            expense: u({[e.target.name]: e.target.value}, this.state.expense)
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.type == "Add") {
            this.addExpense();
        } else {
            this.editExpense();
        }
    };

    addExpense = () => {
        expensesAPI.create(this.currentExpense())
            .then(created => this.handleSuccessSaving(created))
            .catch(err => this.displayError(err.message))
    };

    editExpense = () => {
        expensesAPI.update(this.state.expense.id, this.currentExpense())
            .then(updated => this.handleSuccessSaving(updated))
            .catch(err => this.displayError(err.message))
    };

    handleSuccessSaving = (saved) => {
        this.close();
        this.props.afterSave(this.state.type, saved);
    };

    currentExpense = () => {
        return u({dateTime: toISOString(this.state.expense.dateTime)}, this.state.expense);
    };

    render() {
        return (
            <Modal show={this.state.open} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.type} Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.onSubmit}>
                        <FormGroup controlId="datetime">
                            <FormControl
                                type="text"
                                name="dateTime"
                                value={this.state.expense && this.state.expense.dateTime}
                                placeholder="Date and time (format : MM/dd/YYYY hh:mm:ss)"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="amount"
                                   validationState={this.validateAmount()}>
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl
                                    type="text"
                                    name="amount"
                                    value={this.state.expense && this.state.expense.amount}
                                    placeholder="Amount"
                                    onChange={this.handleChange}
                                />
                                <InputGroup.Addon>.00</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="description">
                            <FormControl
                                type="text"
                                name="description"
                                value={this.state.expense && this.state.expense.description}
                                placeholder="Description"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {this.state.submitError && <div className="error">{this.state.submitError}</div> }
                    <Button bsStyle="primary" onClick={this.onSubmit}>{this.state.type}</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    validateAmount = () => {
        const amount = this.state.expense && this.state.expense.amount;
        if (amount && !isNumber(amount)) {
            return 'error';
        }
    };

    displayError = (error) => {
        this.setState({
            submitError: error
        });
    };

    close = () => {
        this.setState({open: false});
    };

    open = (type, expense) => {
        this.setState({
            open: true,
            type: type,
            expense: expense
        });
    };
}