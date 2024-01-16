// Bubble.js
import React from 'react';

const Bubble = ({ top, left, color, onClick }) => {
  return (
    <div
      className="bubble"
      style={{ top, left, backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
};

export default Bubble;
