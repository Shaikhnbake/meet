Feature: Specify number of events

Scenario: When user hasn't specified a number, 32 is the default number
Given the main page is open
When the user does not specify a number
Then the user should see a list 32 events

Scenario: User can change the number of events they want to see
Given the main page is open
When the user types a number in search box (ex. 15)
Then the user should see a list of events corresponding to that number (ex. 15 events)