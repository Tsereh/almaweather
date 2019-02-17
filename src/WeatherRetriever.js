// This component fetches weather data, for a place given to it in parameters.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIAPPID = "&APPID=c62f15c78133f4e346be75e47f0bb963";// api key

export class WeatherRetriever extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: { // Fetched weather info
                weather: [
                    {
                        main: null,
                        description: null,
                        icon: null
                    }
                ],
                main: {
                    temp: null
                },
                name: null
            },
            placeNotFound: true,// true if fetched response status 404, to tell user that no places found by search parameters
            isLoading: false,// true if fetching data, to show user some loading indicator
            error: null// true if fetched error
        };
    }

    componentDidUpdate(prevProps, prevContext) {
        // Trying to fetch new weather data every time user types something in to searchfield
        if (this.props.place !== prevProps.place && this.props.place !== "") {// To filter out some unnecessary fetches when props are empty or same as previous
            this.setState({isLoading: true});// show loading indicator

            fetch(API + this.props.place + APIAPPID)
                .then(response => {
                    if (response.ok) {// Check that there is weather info fetched
                        this.setState({ placeNotFound: false });
                        return response.json();
                    } else {
                        this.setState({placeNotFound: true });
                    }
                })
                .then(data => this.setState({ result: data, isLoading: false }))
                .catch(error => this.setState({ error, isLoading: false}));
        }
    }

    render() {
        const { result, placeNotFound, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return <p>Loading...</p>
        }

        if (this.props.place === "") {
            return <p>Please, enter a place name in to a search field to see it's weather.</p>
        } else if (placeNotFound) {
            return <p>{this.props.place} does not match any of known to us places.</p>
        }

        return (
            <div>
                <p>{result.main.temp-273.15}</p>
            </div>
        );
    }
}

WeatherRetriever.propTypes = {
    place: PropTypes.string
};