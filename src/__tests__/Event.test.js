import React from "react";
import { shallow } from "enzyme";
import Event from '../Event';
import { mockData } from "../mock-data";

describe('<EventList /> component', () =>{
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });

    test('renders event div', () => {
        expect(EventWrapper.find('.Event')).toBeDefined();
    });

    test('render event summary', () => {
        expect(EventWrapper.find('.summary').text()).toBe(event.summary);
    });

    test('render event preview', () => {
        expect(EventWrapper.find('.eventPreview')).toHaveLength(1);
    });

    test('render details button', () => {
        expect(EventWrapper.find('button.detailsButton')).toHaveLength(1);
    });

    test('renders details hidden by default', () => {
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

    test('clicking show details button should expand extra info', () => {
        EventWrapper.find('button.detailsButton').simulate('click');
        expect(EventWrapper.find('.extraDetails')).toHaveLength(1);
    });

    test('when extra details are expanded, clicking hide details button will hide info', () => {
        EventWrapper.setState({ showDetails: true });
        EventWrapper.find('button.detailsButton').simulate('click');
        expect(EventWrapper.find('.extraDetails')).toHaveLength(0);
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

});