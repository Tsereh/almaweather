// This component fetches weather data, for a place given to it in parameters.
// Stores three last hits in an array, to prevent from null pointer exceptions when async messes up on rapid successive fetches.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainWeather } from "./MainWeather";

const API = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIAPPID = "&APPID=c62f15c78133f4e346be75e47f0bb963";// api key

export class WeatherRetriever extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [// Adds one null hit to an array, to prevent from null pointer exceptions
                {
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
                }
            ],
            placeNotFound: true,// true if fetched response status 404, to tell user that no places found by search parameters
            isLoading: false,// true if fetching data, to show user some loading indicator
            error: null// true if fetched error
        };
    }

    componentDidUpdate(prevProps, prevContext) {
        // Trying to fetch new weather data every time user types something in to SearchField
        if (this.props.place !== prevProps.place && this.props.place !== "") {// To filter out some unnecessary fetches when props are empty or same as previous
            this.setState({isLoading: true});// show loading indicator

            let responseOk = false;
            fetch(API + this.props.place + APIAPPID)
                .then(response => {
                    if (response.ok) {// Check that there is weather info fetched
                        responseOk = true;
                        this.setState({ placeNotFound: false });
                        return response.json();
                    } else {
                        this.setState({placeNotFound: true });
                    }
                })
                .then(data => {
                    if (responseOk) {
                        this.setState({ hits: [data, ...this.state.hits.slice(0, 2)], isLoading: false });// Prepends fetched data in to an array, keeping last two matched fetches
                    } else {
                        this.setState({isLoading: false});
                    }
                })
                .catch(error => this.setState({ error, isLoading: false}));
        }
    }

    render() {
        const { hits, placeNotFound, isLoading, error } = this.state;

        return (
            <MainWeather savedPlaces={this.props.savedPlaces} onPlaceBookmarkToggle={this.props.onPlaceBookmarkToggle} typedPlace={this.props.place} hits={hits} placeNotFound={placeNotFound} isLoading={isLoading} error={error}/>
        );
    }
}

WeatherRetriever.propTypes = {
    place: PropTypes.string,
    onPlaceBookmarkToggle: PropTypes.func,
    savedPlaces: PropTypes.array
};