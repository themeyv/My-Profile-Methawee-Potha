// Background.js
import React, { useState } from 'react';
import Bubble from './Bubble';

const Background = () => {
  const [bubbles, setBubbles] = useState([
    { id: 1, top: '30%', left: '20%', color: '#3498db' },
    { id: 2, top: '50%', left: '70%', color: '#e74c3c' },
    { id: 3, top: '80%', left: '50%', color: '#2ecc71' },
    // Add more bubbles as needed
  ]);

  const handleBubbleClick = (id) => {
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) =>
        bubble.id === id ? { ...bubble, color: getRandomColor() } : bubble
      )
    );
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="background-container">
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          top={bubble.top}
          left={bubble.left}
          color={bubble.color}
          onClick={() => handleBubbleClick(bubble.id)}
        />
      ))}
    </div>
  );
};

export default Background;
