import React from 'react';

import { TimerProvider } from './components/TimerContext';

import ElectricKettle from './components/index';

function App() {
  return (
    <TimerProvider>
      <ElectricKettle />
    </TimerProvider>
  );
}

export default App;
