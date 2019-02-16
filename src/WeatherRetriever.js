import React, { Component } from 'react';

export class WeatherRetriever extends Component {

    render() {
        return (
            <p>{this.props.city}</p>
        );
    }
}