import React, {Component} from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';

// import { mockData } from './mock-data';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';

import { OfflineAlert } from './Alert.js';


class App extends Component {

  state = {
    events: [],
    locations: [],
    number: 32,
    showWelcomeScreen: undefined
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

  async componentDidMount() {
    this.mounted = true;
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if(this.mounted) {
              this.setState({ 
                events, 
                locations: extractLocations(events) 
              });
          }
        });
      }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    if(this.state.showWelcomeScreen === undefined) return <div className='App' />

    return (
      <div className='App'>
        {!navigator.onLine && ( <OfflineAlert text="Meet App is offline" /> ) }
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents number={this.state.number} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
