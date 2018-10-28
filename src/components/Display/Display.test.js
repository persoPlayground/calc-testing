import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display'

describe('Display', () =>{

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Display displayValue={''} />);
    });

    it('displays correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render div', () => {
        expect(wrapper.find('div').length).toBe(1);
    });

    it('renders the value of displayValue', () => {
        wrapper.setProps({displayValue: '123'});
        //expect(wrapper.text()).toBe('123');
        expect(wrapper.text()).toBe('123');
    });
})