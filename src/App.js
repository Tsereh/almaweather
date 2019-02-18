import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import { SearchField } from './SearchField';
import { WeatherRetriever } from "./WeatherRetriever";
import { BookmarkedPlaces } from "./BookmarkedPlaces";

class App extends Component {
    constructor(props) {
        super(props);

        const cookies = new Cookies();
        let savedPlaces = [];
        if (cookies.get('savedPlaces')!==undefined) {
            savedPlaces = cookies.get('savedPlaces')
        }

        this.state = {
            place: "",
            cookies: cookies,
            savedPlaces: savedPlaces
        };

        this.updatePlace = this.updatePlace.bind(this);
        this.togglePlaceBookmark = this.togglePlaceBookmark.bind(this);
    }

    updatePlace(newPlace) {// Updates state.place, to then be sent to weather retriever to fetch data for it
        this.setState({
              place: newPlace
        });
    }

    togglePlaceBookmark(placeToToggle, remove) {// Adds or removes a new placeToToggle from savedPlaces state & cookies
        let sp;
        if(remove) {// Creates new array with or without placeToToggle
            sp = this.state.savedPlaces.filter(item => item !== placeToToggle);
        } else {
            sp = [placeToToggle, ...this.state.savedPlaces];
        }

        this.setState({
            savedPlaces: sp
        });

        // Save to cookies
        const current = new Date();
        const nextYear = new Date();
        nextYear.setFullYear(current.getFullYear() + 1);
        this.state.cookies.set('savedPlaces', sp, { path: '/', expires: nextYear });
    }

    render() {
        return (
            <div className="App container">
                <SearchField onChange={this.updatePlace}/>
                <WeatherRetriever place={this.state.place} onPlaceBookmarkToggle={this.togglePlaceBookmark} savedPlaces={this.state.savedPlaces}/>
                <BookmarkedPlaces savedPlaces={this.state.savedPlaces} loadPlace={this.updatePlace}/>
            </div>
        );
    }
}

export default App;
