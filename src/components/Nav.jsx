import React from 'react';
import DarkMode from '../components/DarkMode.jsx';
import '../styles/Nav.css';
import {ReactComponent as Logo} from '../assets/logoNM.svg';
const Nav = () => {
    return (
        <div className='nav'>
            {/* <h1 className='navTitle'>&lt;NM./&gt;</h1> */}
            <Logo className='navTitle'/>
            <DarkMode/>
        </div>
    );
};

export default Nav;