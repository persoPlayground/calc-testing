import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';

import './Keypad.css';

const Keypad = ({ callOperator, numbers, operators, setOperator, updateDisplay }) => {

    const keypadNums = numbers.map(n =>  <Key
        key={n}
        keyAction={updateDisplay}
        keyType="number-key"
        keyValue={n}
      />);
    const keypadOps = operators.map(o => <Key
        key={o}
        keyAction={setOperator}
        keyType="operator-key"
        keyValue={o}
      />);
    return(
        <div className="keypad-container">
        <div className="numbers-container">
            {keypadNums}
        </div>
        <div className="operators-container">
             {keypadOps}
        </div>
        <div className="submit-container">
        <Key
          keyAction={callOperator}
          keyType="submit-key"
          keyValue="="
        />
      </div>
    </div>
    );
};

Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired, 
    operators:PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired
}

export default  Keypad;