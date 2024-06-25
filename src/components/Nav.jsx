import React from 'react';
import DarkMode from '../components/DarkMode.jsx';
import '../styles/Nav.css';
const Nav = () => {
    return (
        <div className='nav'>
            <h1 className='navTitle'>TODO</h1>
            <DarkMode/>
        </div>
    );
};

export default Nav;