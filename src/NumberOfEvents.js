import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = { number: 32 };

    handleNumberChanged = (event) => {
        const value = event.target.value;
        this.setState({ number: value });
        this.props.updateEvents(value);
    }


    render() {
        return (
                <input 
                    type="number" 
                    className="numberOfEvents"
                    value={this.state.number}
                    onChange={this.handleNumberChanged}
                />
        );
    }
}

export default NumberOfEvents;