import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import React from "react";
import { mount } from "enzyme";
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    	given('the main page is open', () => {
            
    	});

    	when('the user does not specify a number', () => {
            AppWrapper = mount(<App />);
    	});

    	then(/^the user should see a list (\d+) events$/, (arg0) => {
            AppWrapper.update();
            expect(AppWrapper.state('number')).toEqual(32);

    	});
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
    	given('the main page is open', async () => {
            AppWrapper = await mount(<App />);

    	});

    	when(/^the user types a number in search box \(ex. (\d+)\)$/, (arg0) => {
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const newNumber = { target: {value: 2} };
            NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', newNumber);
    	});

    	then(/^the user should see a list of events corresponding to that number \(ex. (\d+) events\)$/, (arg0) => {
            expect(AppWrapper.find('.EventList .event')).toHaveLength(2);
    	});
    });



});