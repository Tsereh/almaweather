// This component shows list of bookmarked places.
// Click on a particular saved place shows its weather information

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from "reactstrap";

export class BookmarkedPlaces extends Component {
    constructor(props) {
        super(props);

        this.handlePlaceClick = this.handlePlaceClick.bind(this);
    }

    handlePlaceClick(e) {
        this.props.loadPlace(e.target.value);// Calls App.updatePlace(), to fetch data for clicked place
    }

    render() {
        return (
            <div className="bookmarked-places">
                {this.props.savedPlaces.map((savedPlace, key) =>
                    <Button className="bookmarked-place" color="secondary" key={key} value={savedPlace} onClick={this.handlePlaceClick}>{savedPlace}</Button>
                )}
            </div>
        )
    }
}

BookmarkedPlaces.propTypes = {
    savedPlaces: PropTypes.array,
    loadPlace: PropTypes.func
};