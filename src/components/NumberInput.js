import React from 'react';

import { useTimerContext } from './TimerContext';

import './index.css';

const NumberInput = () => {
    const { inputValue, handleInputChange } = useTimerContext();

    return (
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min={0}
          max={1.0}
          step={0.1}
        />
    )
};

export default NumberInput;