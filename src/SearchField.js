// This component is responsible for search field.
// It updates it parents(App.js) state.place, every time user types something in to input field.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Input, Button, InputGroupAddon } from 'reactstrap';

export class SearchField extends Component {
    constructor(props) {
        super(props);

        this.state = { userInput: ''};

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        const place = e.target.value;
        this.setState({userInput: place});
        this.props.onChange(place);
    }

    render() {
        return (
            <InputGroup className="search-field">
                <Input onChange={this.handleUserInput} value={this.state.userInput} placeholder="Search" />
                <InputGroupAddon addonType="append"><Button color="primary">Search</Button></InputGroupAddon>
            </InputGroup>
        );
    }
}

SearchField.propTypes = {
    onChange: PropTypes.func.isRequired
};