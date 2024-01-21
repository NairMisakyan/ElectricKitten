import React from 'react';
import { useTimerContext } from './TimerContext';

import './index.css';

const Switcher = () => {
  const { inputValue, isSwitchedOn, handleSwitchChange } = useTimerContext();

  return (
    <div>
      <label>
        Switcher:
        <input
          type="checkbox"
          disabled={!inputValue}
          checked={isSwitchedOn}
          onChange={handleSwitchChange}
        />
      </label>
    </div>
  );
};

export default Switcher;
