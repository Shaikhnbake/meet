import React, { Component } from "react";
import { updateEvents } from './App';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        number: 32,
        errorText: ''
    };

    handleNumberChanged = (event) => {
        const value = event.target.value;

        if (value > 32 || value < 1) {
            this.setState({
                number: value,
                errorText: 'Please choose a number between 1 and 32'
            });
        } else {
            this.setState({
                number: value,
                errorText: ''
            });
        }

        this.props.updateEvents(undefined, value);
    }


    render() {

        return (
            <div>
                <div>
                    <ErrorAlert text={this.state.errorText} />
                </div>
                <input
                    type="number"
                    min='1'
                    className="numberOfEvents"
                    value={this.state.number}
                    onChange={this.handleNumberChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;