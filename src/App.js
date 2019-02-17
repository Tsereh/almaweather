import React, { Component } from 'react';
import './App.css';
import { SearchField } from './SearchField';
import { WeatherRetriever } from "./WeatherRetriever";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { city: '' };

        this.updateCity = this.updateCity.bind(this);
    }

    updateCity(newCity) {
        this.setState({
              city: newCity
        });
    }

    render() {
        return (
            <div className="App container">
                <SearchField onChange={this.updateCity}/>
                <WeatherRetriever city={this.state.city}/>
            </div>
        );
    }
}

export default App;
