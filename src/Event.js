import React, { Component, prevState } from "react";

class Event extends Component {
    state = { showDetails: false };
    
    toggleShowDetails = () => {
        this.setState((prevState) => ({ showDetails: !prevState.showDetails}));
    };
    
    render() {
        const {event} = this.props;
        const {showDetails} = this.state;
        
        return (
            <div className="event">
                <h1 className="summary">{event.summary}</h1>
                <p className="eventPreview">
                    {(event.start.dateTime).toString()} <br/>
                    {event.summary} | {event.location}    
                </p>
                {showDetails && (
                    <>
                        <div className="extraDetails">
                            <h3>About event:</h3>
                            <a href={event.htmlLink}>See details on Google Calendar</a>
                            <p className="description">{event.description}</p>
                        </div>
                    </>
                )}
                <button className="detailsButton" onClick={() => this.toggleShowDetails()}>
                    {!showDetails ? "show" : "hide"} details
                </button>
            </div>
        );
    }
}

export default Event;