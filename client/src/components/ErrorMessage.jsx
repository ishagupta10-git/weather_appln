import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <span className="error-icon">⚠</span>
      <span className="error-text">{message}</span>
    </div>
  );
};

export default ErrorMessage;
