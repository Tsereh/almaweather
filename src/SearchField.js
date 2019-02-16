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
        const city = e.target.value;
        this.setState({userInput: city});
        this.props.onChange(city);
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