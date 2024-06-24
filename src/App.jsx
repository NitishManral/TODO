import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import DarkMode from './components/DarkMode.jsx';
import ProfilePoster from './components/ProfilePoster.jsx';
import Intro from './components/Intro.jsx';
import Nav from './components/Nav.jsx';
function App() {
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
        },
      ]);

      setTimeout(() => {
        setBubbles((bubbles) => bubbles.filter((bubble) => bubble.id !== id));
      }, 7000); 
    }, 700); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='mainContainer' >

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
        <Nav/>
        <div className='con'>
          <Intro/>
          <ProfilePoster/>
        </div>
        
    </div>
  );
}

export default App;