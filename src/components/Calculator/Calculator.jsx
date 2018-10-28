import React, { Component } from 'react';
import Dispaly from '../Display/Display';
import Keypad from '../Keypad/Keypad';

import './Calculator.css';

class Calculator extends Component {

    state = {
        displayValue: '0', //<Dispaly />
        numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0','ce'], //numbers in <Key />
        operators: ['/', 'x', '-', '+'], //ops in <Key />
        selectedOperator: '',
        storedValue: ''
    }

    callOperator() {
        console.log('callOperator');
    }

    setOperator() {
        console.log('setOperator');
    }

    updateDisplay() {
        console.log('updateDisplay');
    }

    render() {
        return(
            <div className="calculator-container">
                <Dispaly displayValue={this.state.displayValue} />
                <Keypad 
                callOperator={this.callOperator} 
                numbers={this.state.numbers}
                operators={this.state.operators}
                setOperator={this.setOperator} 
                updateDisplay={this.updateDisplay}
                />
            </div>
        )
    }
}

export default Calculator;