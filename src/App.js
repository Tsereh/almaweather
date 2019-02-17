import React, { Component } from 'react';
import './App.css';
import { SearchField } from './SearchField';
import { WeatherRetriever } from "./WeatherRetriever";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { place: '' };

        this.updatePlace = this.updatePlace.bind(this);
    }

    updatePlace(newPlace) {
        this.setState({
              place: newPlace
        });
    }

    render() {
        return (
            <div className="App container">
                <SearchField onChange={this.updatePlace}/>
                <WeatherRetriever place={this.state.place}/>
            </div>
        );
    }
}

export default App;
