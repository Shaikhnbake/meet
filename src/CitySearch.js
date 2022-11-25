import React, { Component } from "react";
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = { 
        query: '',
        suggestions: [],
        showSuggestions: undefined,
        infoText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        
        if(suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'No city found. Please try another city'
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false     
        });
        this.props.updateEvents(suggestion);
    }

    render() {
        return (
            <div className="CitySearch">
                <h1><b>CalendarMeet !</b></h1>  
                <h3>Looking for a specific city?</h3>
                <input 
                    type="text" 
                    className="city"
                    placeholder="all cities"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                />
                <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                    <li key='all' onClick={() => this.handleItemClicked("all")} >
                        <b>See all cities</b>
                    </li>
                </ul>
                <InfoAlert text={this.state.infoText} />
            </div>

        );
    }
}

export default CitySearch;