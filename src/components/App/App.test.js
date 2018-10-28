import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';

describe('App', () =>{
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a div', () => {
        expect(wrapper.find('div').length).toBe(1);
    });

    it('should render the Calculatot Component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toBe(true);
    });

});