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
            place: '' ,
            cookies: cookies,
            savedPlaces: savedPlaces
        };

        this.updatePlace = this.updatePlace.bind(this);
        this.savePlace = this.savePlace.bind(this);
    }

    updatePlace(newPlace) {// Updates state.place, to then be sent to weather retriever to fetch data for it
        this.setState({
              place: newPlace
        });
    }

    savePlace(placeToSave) {// Adds new placeToSave to savedPlaces state & cookies if not yet included
        if(!this.state.savedPlaces.includes(placeToSave)) {
            const sp = [placeToSave, ...this.state.savedPlaces];
            this.setState({
                savedPlaces: sp
            });

            const current = new Date();
            const nextYear = new Date();
            nextYear.setFullYear(current.getFullYear() + 1);

            this.state.cookies.set('savedPlaces', sp, { path: '/', expires: nextYear });
        }
    }

    render() {
        return (
            <div className="App container">
                <SearchField onChange={this.updatePlace}/>
                <WeatherRetriever place={this.state.place} onPlaceSave={this.savePlace}/>
                <BookmarkedPlaces savedPlaces={this.state.savedPlaces} loadPlace={this.updatePlace}/>
            </div>
        );
    }
}

export default App;
