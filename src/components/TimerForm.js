import React from 'react';

import { useTimerContext } from './TimerContext';

import './index.css';

const ComponentUsingContext = () => {
  const { timer, temperature } = useTimerContext();

  return (
    <div className='timer-form-container'>
      <p>Time: {timer / 1000}s</p>
      <p>Temperature: {temperature}</p>
    </div>
  );
};

export default ComponentUsingContext;
