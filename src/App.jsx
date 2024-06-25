import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Bubbles from './components/Bubbles.jsx';
import TodosFun from './components/TodosFun.jsx';
import AddTodo from './components/AddTodo.jsx';
function App() {
  return (
    <div className='mainContainer' >

        <Bubbles/>
        <Nav/>
        <TodosFun/>
        <AddTodo/>
    </div>
  );
}

export default App;