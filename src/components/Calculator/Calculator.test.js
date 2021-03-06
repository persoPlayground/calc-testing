import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Calculator />);
    });
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('should render a div', () => {
        expect(wrapper.find('div').length).toBe(1);
    });

    it('should render Display Element', () => {
        expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue} />)).toBe(true);
    });

    it('should render Keypad component', () => {
        expect(wrapper.containsAllMatchingElements([
            <Display displayValue={wrapper.instance().state.displayValue} />,
            <Keypad
            callOperator={wrapper.instance().callOperator}
            numbers={wrapper.instance().state.numbers}
            operators={wrapper.instance().state.operators}
            setOperator={wrapper.instance().setOperator}
            updateDisplay={wrapper.instance().updateDisplay}
            />
        ])).toBe(true);
    });
});
