import React, { useState, useEffect } from 'react';
import '../styles/Intro.css';
import Typewriter from 'typewriter-effect';

const Intro = () => {
    const texts = ['Full Stack Developer', 'Front-end Developer', 'Back-end Developer', 'Mobile App Developer'];
    const [currentIndex, setCurrentIndex] = useState(0); // Start with the first text
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex < texts.length - 1 ? prevIndex + 1 : 0));
      }, 4000); // Change text every 4 seconds
  
    //   return () => clearInterval(intervalId); 
    }, []); 
  
    return (
        <div className='intro'>
            <h1 className='name'>Hi, I'm <span>Nitish</span></h1>
            <p className='prof'>
                I'm a 
                <Typewriter
                    skipAddStyles
                    options={{
                        strings: ['Full Stack Developer', 'Front-end Developer', 'Back-end Developer', 'Mobile App Developer'],
                        autoStart: true,
                        loop: true,
                      }}
                />
            </p>
        </div>
    );
};

export default Intro;