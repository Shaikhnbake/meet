Feature: Show/Hide an event's details

Scenario: An event element is collapsed by default
Given the main page is open
When event list is shown
Then the event details will be collapsed

Scenario: User can expand an event to see its details
Given the user wants to see event's details
When the user clicks more details button
Then the user should see expanded details on specific event.

Scenario: User can collapse an event to hide its details
Given the user wants to hide event's details
When the user clicks show less button
Then the expanded detiails will collapse
