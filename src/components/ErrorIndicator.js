
// Core
import React from 'react';

const ErrorIndicator = ({msg}) => {
  return (
    <div className="error-indicator">
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <p className="error_message">{msg}</p>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;