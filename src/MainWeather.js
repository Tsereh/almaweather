// Shows weather of currently selected place

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export class MainWeather extends Component {
    constructor(props) {
        super(props);

        this.handlePlaceSave = this.handlePlaceSave.bind(this);
    }

    handlePlaceSave() {
        this.props.onPlaceSave(this.props.selectedPlaceWeather.name);
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
            content = (
                <div>
                    <p>There is {selectedPlaceWeather.weather[0].description} in {selectedPlaceWeather.name}</p>
                    <p>{selectedPlaceWeather.main.temp-273.15}°C</p>
                    <Button color="primary" onClick={this.handlePlaceSave}>Bookmark</Button>
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
    typedPlace: PropTypes.string,
    selectedPlaceWeather: PropTypes.object,
    placeNotFound: PropTypes.bool,
    isLoading: PropTypes.bool,
    error: PropTypes.object
};