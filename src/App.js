import React, {Component} from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api';

import { OfflineAlert } from './Alert.js';


class App extends Component {

  state = {
    events: [],
    locations: [],
    number: 32
  }

  updateEvents = (location, eventNumber) => {
    const { number } = this.state;
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      
      eventNumber = eventNumber === undefined ? number : eventNumber;
      
      this.setState({ 
        events: locationEvents,
        number: eventNumber
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted) {
        this.setState({ 
          events, 
          locations: extractLocations(events) 
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className='App'>
        {!navigator.onLine && ( <OfflineAlert text="Meet App is offline" /> ) }
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents number={this.state.number} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
