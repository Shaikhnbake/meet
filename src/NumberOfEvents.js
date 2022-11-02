import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = { number: 32 };

    handleNumberChanged = (newNumber) => {
        this.setState({ number: newNumber });
    }


    render() {
        const { number } = this.state;

        return (
                <input 
                    type="number" 
                    className="eventNumber"
                    value={number}
                    onChange={(event) => {this.handleNumberChanged(event.target.value);}}
                />
        );
    }
}

export default NumberOfEvents;