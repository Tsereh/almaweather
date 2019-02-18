// This component is responsible for search field.
// It updates it parents(App.js) state.place, every time user types something in to input field.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Input } from 'reactstrap';

export class SearchField extends Component {
    constructor(props) {
        super(props);

        this.state = { userInput: ""};

        this.handleUserInput = this.handleUserInput.bind(this);
        this.clearUserInput = this.clearUserInput.bind(this);
    }

    handleUserInput(e) {
        const place = e.target.value;
        this.setState({userInput: place});
        this.props.onChange(place);
    }

    clearUserInput() {
        this.setState({userInput: ""});
        this.props.onChange("");
    }

    render() {
        let clearSpan;
        if (this.state.userInput !== "") {
            clearSpan = <span className="clear-span clear-cross" onClick={this.clearUserInput}>⨉</span>;
        }

        return (
            <InputGroup className="search-field">
                <Input id="search-field" onChange={this.handleUserInput} value={this.state.userInput} placeholder="Search" />
                {clearSpan}
            </InputGroup>
        );
    }
}

SearchField.propTypes = {
    onChange: PropTypes.func.isRequired
};