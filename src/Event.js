import React, { Component, useState } from "react";

class Event extends Component {
    
    render() {
        const { event } = this.props;
        const [show, toggleShow] = useState(false);
        return (
            <div className="Event">
                <h1 className="summary">{event.summary}</h1>
                {
                    show?<p>{event.description}</p>:null
                }
                <button className="details" onClick={() => toggleShow(!show)}>
                    More/Less details
                </button>
            </div>


        );
    }
}

export default Event;