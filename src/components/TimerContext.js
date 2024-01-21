import React, { createContext, useContext, useState, useEffect } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(0);
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let interval;
  
    const maxBoilingTime = 10 * inputValue; // Maximum boiling time based on the input value
    const maxTemperature = 98.8; // Maximum temperature

    if (isSwitchedOn && timer === 0) {
      setIsClicked(true);
    }
  
    if (isSwitchedOn && timer < maxBoilingTime * 1000) {
      interval = setInterval(() => {
        setIsClicked(false);
        setTimer((prevTimer) => prevTimer + 1000);
        // Calculate temperature based on the current time and boiling time
        const currentTemperature = (timer / (maxBoilingTime * 1000)) * maxTemperature;
  
        // Ensure the temperature doesn't exceed the maximum
        const clampedTemperature = Math.min(currentTemperature, maxTemperature);
  
        setTemperature(clampedTemperature);
      }, 1000);
    } else if (timer !== 0 && timer >= maxBoilingTime * 1000) {
      // If the boiling time exceeds the maximum, set the temperature to the maximum
      setTemperature(maxTemperature);
  
      // Automatically switch off when boiling is done
      setIsSwitchedOn(false);
      setIsClicked(true);
    }
  
    return () => {
      setIsClicked(false);
      clearInterval(interval);
    };
  }, [isSwitchedOn, timer, inputValue]);
  
  const handleSwitchChange = () => {
    setIsSwitchedOn(!isSwitchedOn);
    setTimer(0);
    setTemperature(0);
  };

  const handleInputChange = (e) => {
    let newValue = parseFloat(e.target.value);
    newValue = Math.max(0, Math.min(1.0, newValue));
    setInputValue(newValue);
    setTimer(0);
  };

  // Export the context and the provider
  return (
    <TimerContext.Provider
      value={{
        timer,
        isSwitchedOn,
        inputValue,
        temperature,
        handleSwitchChange,
        setInputValue,
        handleInputChange,
        setIsClicked,
        isClicked,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

// Custom hook to simplify context usage
export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimerContext must be used within a TimerProvider');
  }
  return context;
};
