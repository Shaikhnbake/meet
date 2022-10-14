
# Meet App

This app shows a user events occuring in any searchable city in conjuctiong with Google Calendar. The app will still work offline using cached data. The user will be able to filter events by city, show/hide event's details, specify number of events and provides a a chart for data visualization. 


## Features


### 1. Filter events by city

As a user, I should be able to filter events by city so that I can see the list of events that take place in that city

**Scenario 1:** When user hasn't searched for a city, show upcoming events from all cities

- Given user hasn't searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events

**Scenario 2:** User should see a list of suggestions when they search for a city

- Given the main page is open
- When the user starts typing in city textbox
- Then the user should see a list of cities that match what they've typed

**Scenario 3:** User can select a city from the sugggested list

- Given the user was typing "Berlin" in the city textbox and the list of suggested cities is showing
- When the user selects a city (ex. "Berlin, Germany") from the list
- Then their city should be changed to that city ("Berlin, Germany") and the user should see a list of upcoming events in that city

### 2. Show/Hide an event's details

As a user, I should be able to show/hide event details so that I can see more/less
information about an event.

**Scenario 1:** An event element is collapsed by default

- Given the main page is open
- When event list is shown
- Then the event details will be collapsed

**Scenario 2:** User can expand an event to see its details

- Given the user wants to see event's details
- When the user clicks more details button
- Then the user should see expanded details on specific event.

**Scenario 3:** User can collapse an event to hide its details

- Given the user wants to hide event's details
- When the user clicks show less button
- Then the expanded detiails will collapse

### 3. Specify number of events

As a user, I should be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.

**Scenario 1:** When user hasn't specified a number, 32 is the default number

- Given the main page is open
- When the user opens the app
- Then the user should see a list 32 events

**Scenario 2:** User can change the number of events they want to see

- Given the user specifies a number
- When the user types a number in search box (ex. 15)
- Then the user should see a list of events corresponding to that number (ex. 15 events)

### 4. Use the app when offline

As a user, I should be able to use the app when offline so that I can see the events I
viewed the last time I was online.

**Scenario 1:** Show cached data when there's no internet connection.

- Given user has no internet connection
- When the app is accessed offline
- Then the cached data will show existing events in database

**Scenario 2:** Show error when user changes the settings (city, time range)

- Given user has no internet connection
- When the user changes the settings
- Then an error message will be displayed


### 5. Data visualization

As a user, I should be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city

**Scenario 1:** Show a chart with the number of upcoming events in each city

- Given the specific city page is open
- When the user clicks on more details event button
- Then the user should see a chart with upcoming event data displayed





## Authors

- [@Shaikhnbake](https://www.github.com/Shaikhnbake)


## Deployment

To deploy this project run

```bash
  npm run deploy
```