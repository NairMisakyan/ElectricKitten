import React, { useMemo } from 'react';

import { useTimerContext } from './TimerContext';

import Switcher from './Switcher';
import TimerForm from './TimerForm';
import NumberInput from './NumberInput';
import AlertMessage from './AlertMessage';

import './index.css';

const ElectricKettle = () => {
  const { isSwitchedOn, isClicked } = useTimerContext();

  const message = isSwitchedOn ? 'Switch On' : 'Switch Off';

  const items = useMemo(() => [
    {
      position: 'A1',
      component: <NumberInput />,
      className: 'water-container',
    },
    {
      position: 'A2',
      component: <Switcher/>,
      className: 'turn-on-off',
    },
  ], []);

  return (
    <div className='full-page-container'>
    <div className='page-container'>
      <div className="kitten-container">
        {items.map(({ position, className, component }) => (
          <div
            key={position}
            className={`${className}`}
          >
            <div className='position-items'>
              {component}
            </div>
          </div>
        ))}
      </div>
      <div className='timer-container'>
        <TimerForm />
      </div>
    </div>
    <div className='alert-container'>
      {isClicked && <AlertMessage message={`${message}`} /> }
    </div>
    </div>
  );
};

export default ElectricKettle;
