import React from 'react';
import '../styles/Bubbles.css';
import { useState, useEffect } from 'react';

const Bubbles = () => {
    const [bubbles, setBubbles] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      setBubbles((bubbles) => [
        ...bubbles,
        {
          id: id, 
          left: Math.random() * 100, 
          size: Math.random() * 10 + 5, 
          borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`, // Semi-transparent color

        },
      ]);

      setTimeout(() => {
        setBubbles((bubbles) => bubbles.filter((bubble) => bubble.id !== id));
      }, 8000); 
    }, 500); 

    return () => clearInterval(interval); 
  }, []);

    return (
        <>
            {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className='bubble'
              style={{ 
                left: `${bubble.left}%`, 
                borderColor: bubble.borderColor, 
                width: `${bubble.size}px`, 
                height: `${bubble.size}px` 
              }}
            />
            ))}
      </>
    );
};

export default Bubbles;