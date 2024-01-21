import React, { useState, useEffect } from 'react';

import './index.css';

const AlertMessage = ({ message, duration = 2000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return visible ? <div className="alert">{message}</div> : null;
};

export default AlertMessage;
