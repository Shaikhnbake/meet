import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () =>{
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('renders number input box', () => {
        expect(NumberOfEventsWrapper.find('.eventNumber')).toHaveLength(1);
    });

    test('renders default numbere of 32', () => {
        expect(NumberOfEventsWrapper.state('number')).toBe(32);
    });

    test('change state when number input changes', () => {
        NumberOfEventsWrapper.find('.eventNumber').simulate('change', { target : {value: 12} });
        expect(NumberOfEventsWrapper.state('number')).toBe(12);
    });
    
    
    
    
});