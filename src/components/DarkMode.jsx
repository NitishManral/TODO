import React, { useState } from "react";
// import Moon from "../assets/Moon.svg";
// import Sun from "../assets/Sun.svg"

import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import "../styles/DarkMode.css";

const DarkMode = () => {
    const [checked, setChecked] = useState(()=>{
        if(localStorage.getItem("theme") === "dark"){
            return true;
        }
        else if(localStorage.getItem("theme") === "light"){
            return false;
        }
        else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            return true;
        }
        else{
            return false;
        }
    });
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");

    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
    const theme = localStorage.getItem("theme");
    if(theme === "dark"){
        setDarkMode();
    }
    else {
        setLightMode();
    }
    const toggleTheme = (e) => {
        if(e.target.checked)    setDarkMode();
        else setLightMode();
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={checked}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle' >
              <Sun/>
              <Moon/>
              
            </label>
        </div>
    );
};

export default DarkMode;
