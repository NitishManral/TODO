import React from 'react';
import '../styles/ProfilePoster.css';
import ProfilePic from '../assets/profilePic.png';
const ProfilePoster = () => {
    return (
        <div className='posterContainer'>
            <div className='picContainer'>
                
                <img src={ProfilePic} alt='Profile' className='profilePic'/>
                <div className='prop'></div>

            </div>
        </div>
    );
};

export default ProfilePoster;