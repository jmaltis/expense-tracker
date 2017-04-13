import React, {Component} from "react";
import {Modal, Button, FormGroup, FormControl, InputGroup} from "react-bootstrap";
import u from "updeep";

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
        console.log(this.state.expense);
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
                                name="datetime"
                                value={this.state.expense && this.state.expense.datetime}
                                placeholder="Date and time"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="amount">
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
                    <Button bsStyle="primary" onClick={this.onSubmit}>{this.state.type}</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

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