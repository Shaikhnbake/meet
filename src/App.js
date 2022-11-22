import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventGenre from './EventGenre';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// import { mockData } from './mock-data';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';

import { OfflineAlert } from './Alert.js';


class App extends Component {

  state = {
    events: [],
    locations: [],
    number: 32,
    locationSelected: 'all',
    showWelcomeScreen: undefined
  }

  updateEvents = (location, eventNumber) => {
    if (eventNumber === undefined) {
      eventNumber = this.state.number;
    } else (
      this.setState({ number: eventNumber })
    )
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      let locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventNumber),
        number: eventNumber,
        locationSelected: location
      });
    });
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events,
            locations: extractLocations(events)
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { locations, number, events } = this.state;

    if (this.state.showWelcomeScreen === undefined) return <div className='App' />

    return (
      <div className='App'>
        {!navigator.onLine && (<OfflineAlert text="Meet App is offline" />)}
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents number={number} updateEvents={this.updateEvents} />

        <div className='data-graphs'>
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              width={730}
              height={250}
              margin={{
                top: 20, right: 20, bottom: 10, left: 10
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" name='city' type="category" />
              <YAxis dataKey="number" name="number of events" type="number" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>


          </ResponsiveContainer>
        </div>
        <EventList events={events.slice(0, number)} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
