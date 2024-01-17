// Background.js
import React, { useState, useEffect } from 'react';
import Bubble from './Bubble';
import './Background.css';

const Background = () => {
  const [bubbles, setBubbles] = useState([
    // First Row
    { id: 1, top: '10%', left: '10%', color: '#3498db' },
    { id: 2, top: '10%', left: '30%', color: '#e74c3c' },
    { id: 3, top: '10%', left: '50%', color: '#2ecc71' },
    { id: 4, top: '10%', left: '70%', color: '#f39c12' },
    { id: 5, top: '10%', left: '90%', color: '#9b59b6' },

    // Second Row
    { id: 6, top: '30%', left: '10%', color: '#34495e' },
    { id: 7, top: '30%', left: '30%', color: '#d35400' },
    { id: 8, top: '30%', left: '50%', color: '#27ae60' },
    { id: 9, top: '30%', left: '70%', color: '#e67e22' },
    { id: 10, top: '30%', left: '90%', color: '#3498db' },

    // Third Row
    { id: 11, top: '50%', left: '10%', color: '#3498db' },
    { id: 12, top: '50%', left: '30%', color: '#e74c3c' },
    { id: 13, top: '50%', left: '50%', color: '#2ecc71' },
    { id: 14, top: '50%', left: '70%', color: '#f39c12' },
    { id: 15, top: '50%', left: '90%', color: '#9b59b6' },

    // Fourth Row
    { id: 16, top: '70%', left: '10%', color: '#34495e' },
    { id: 17, top: '70%', left: '30%', color: '#d35400' },
    { id: 18, top: '70%', left: '50%', color: '#27ae60' },
    { id: 19, top: '70%', left: '70%', color: '#e67e22' },
    { id: 20, top: '70%', left: '90%', color: '#3498db' },
  ]);

  useEffect(() => {
    // Generate an additional set of random bubbles after 3 seconds
    const timeoutId = setTimeout(() => {
      setBubbles((prevBubbles) => [
        ...prevBubbles,
        ...generateRandomBubbles(5), // You can adjust the number of additional bubbles
      ]);
    }, 3000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Run only once on component mount

  const generateRandomBubbles = (numBubbles) => {
    return Array.from({ length: numBubbles }, (_, index) => ({
      id: bubbles.length + index + 1,
      top: `${getRandomPosition()}%`,
      left: `${getRandomPosition()}%`,
      color: getRandomColor(),
    }));
  };

  const getRandomPosition = () => Math.floor(Math.random() * 100);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleBubbleClick = (id) => {
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) =>
        bubble.id === id ? { ...bubble, color: getRandomColor() } : bubble
      )
    );
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
