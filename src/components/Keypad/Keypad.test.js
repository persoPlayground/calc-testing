import React from 'react';
import { shallow, mount } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
         <Keypad
            numbers={[]}    
            callOperator={jest.fn()}
            operators={[]}
            setOperator={jest.fn()}
            updateDisplay={jest.fn()}
      />
        );
    });
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toBe(4);
      });

      it('should render an instance of the Key component', () => {
        const numbers = ['0', '1'];
        const operators = ['+', '-'];
        const submit = 1;
        const keyTotal = numbers.length + operators.length + submit;
        wrapper.setProps({numbers, operators});
        expect(wrapper.find('Key').length).toEqual(keyTotal);
      });
});

describe('Mounted Keypad', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
         <Keypad
            numbers={[]}    
            callOperator={jest.fn()}
            operators={[]}
            setOperator={jest.fn()}
            updateDisplay={jest.fn()}
      />
        );
    });

    afterEach(() => {
        wrapper.unmount();
    })
      it('renders the values of numbers', () => {
          wrapper.setProps({ numbers: ['1', '2']});
          expect(wrapper.find('.numbers-container').text()).toBe('12');
      });

      it('renders the values of operators', () => {
        wrapper.setProps({operators: ['+', '-', '*', '/']});
        expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
      });

});