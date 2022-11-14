import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import React from "react";
import { mount } from "enzyme";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = mount(<App />);
    });

    test('An event element is collapsed by default', ({ given, when, then }) => {
    	given('the main page is open', () => {

    	});

    	when('event list is shown', () => {
            expect(AppWrapper.find('.event')).toBeDefined();
    	});

    	then('the event details will be collapsed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .extraDetails')).toHaveLength(0);

    	});
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
    	given('the user wants to see event\'s details', () => {

    	});

    	when('the user clicks more details button', () => {
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');
    	});

    	then('the user should see expanded details on specific event.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .extraDetails')).toHaveLength(1);
    	});
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
    	given('the user wants to hide event\'s details', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');
            expect(AppWrapper.find('.event .extraDetails')).toHaveLength(1);

    	});

    	when('the user clicks show less button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');
    	});

    	then('the expanded detiails will collapse', () => {
            expect(AppWrapper.find('.event .extraDetails')).toHaveLength(0);

    	});
    });








});