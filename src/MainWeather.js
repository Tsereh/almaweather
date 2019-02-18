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
            content = <p className="main-weather-oneliner">{error.message}</p>;
        } else if (isLoading) {
            content = <p className="main-weather-oneliner">Loading...</p>;
        } else if (typedPlace === "") {
            content = <p className="main-weather-oneliner">Please, enter a place name in to a search field to see it's weather.</p>;
        } else if (placeNotFound) {
            content = <p className="main-weather-oneliner">{typedPlace} does not match any of known to us places.</p>;
        } else {
            // Is current place already bookmarked
            const exists = this.props.savedPlaces.includes(this.props.selectedPlaceWeather.name);

            content = (
                <div>
                    <p>{selectedPlaceWeather.weather[0].description.charAt(0).toUpperCase()}{selectedPlaceWeather.weather[0].description.slice(1)} in {selectedPlaceWeather.name}</p>
                    <img className="weather-img" src={"http://openweathermap.org/img/w/" + selectedPlaceWeather.weather[0].icon + ".png"} alt={selectedPlaceWeather.weather[0].main + " icon"}/>
                    <p>{Math.ceil((selectedPlaceWeather.main.temp-273.15)*10)/10}°C</p>
                    <Button className="bookmark-btn" color="primary" onClick={this.handlePlaceToggle}>{ exists ? "Bookmarked" : "Bookmark" }</Button>
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