// Shows weather of currently selected place

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export class MainWeather extends Component {
    constructor(props) {
        super(props);

        this.handlePlaceToggle = this.handlePlaceToggle.bind(this);
    }

    handlePlaceToggle() {
        const exists = this.props.savedPlaces.includes(this.props.selectedPlaceWeather.name);
        this.props.onPlaceBookmarkToggle(this.props.selectedPlaceWeather.name, exists);
    }

    render() {
        const { typedPlace, selectedPlaceWeather, placeNotFound, isLoading, error } = this.props;

        let content;
        if (error) {
            content = <p>{error.message}</p>;
        } else if (isLoading) {
            content = <p>Loading...</p>;
        } else if (typedPlace === "") {
            content = <p>Please, enter a place name in to a search field to see it's weather.</p>;
        } else if (placeNotFound) {
            content = <p>{typedPlace} does not match any of known to us places.</p>;
        } else {
            // Is current place already bookmarked
            const exists = this.props.savedPlaces.includes(this.props.selectedPlaceWeather.name);
            content = (
                <div>
                    <p>There is {selectedPlaceWeather.weather[0].description} in {selectedPlaceWeather.name}</p>
                    <p>{selectedPlaceWeather.main.temp-273.15}°C</p>
                    <Button color="primary" onClick={this.handlePlaceToggle}>{ exists ? "Bookmarked" : "Bookmark" }</Button>
                </div>
            );
        }

        return (
            <div className="main-weather">
                {content}
            </div>
        )
    }
}

MainWeather.propTypes = {
    savedPlaces: PropTypes.array,
    onPlaceBookmarkToggle: PropTypes.func,
    typedPlace: PropTypes.string,
    selectedPlaceWeather: PropTypes.object,
    placeNotFound: PropTypes.bool,
    isLoading: PropTypes.bool,
    error: PropTypes.object
};