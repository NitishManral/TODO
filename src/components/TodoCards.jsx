import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoState,deleteTodo } from '../app/store';
import {ReactComponent as Edit} from '../assets/pen.svg';
import '../styles/TodoCards.css';
import EditTodo from './EditTodo.jsx';
import { ReactComponent as Trash} from '../assets/trash.svg';
const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditTodoOpen, setisEditTodoOpen] = useState(false);
    const [todoToEdit, setTodoToEdit] = useState(null);

    const getRandomColor = () => {
        const colors = ['#005874', '#1C819E', '#FFBE00', '#36BA98', '#E9C46A','#F4A261', '#FF7F3E', '#597445', '#A0937D', '#8E7AB5'] ;
        let color = colors[Math.floor(Math.random() * colors.length)];
        return color;
    };

    const cardStyle = {
        backgroundColor: getRandomColor(),
        
    };

    const handleEdit = (todo) => {
        setTodoToEdit(todo); 
        setisEditTodoOpen(true);
    };
    

    const handleCheckboxChange = () => {
        dispatch(toggleTodoState(todo.id)); 
    };

    return (
        <>
            {isEditTodoOpen && <EditTodo isEditMode={true} key={todo.key} todoToEdit={todoToEdit} onClose={() => setisEditTodoOpen(false)} />}        

            <div className='todoCard' style={cardStyle}>
            <h3 className='todoTitle'>{todo.title}</h3>
            <p className='todoDescription'>{todo.description}</p>
            <input
                className='isDone'
                type="checkbox"
                checked={todo.state}
                onChange={handleCheckboxChange}
                style={cardStyle}
            />
            <Trash className='trashIcon' onClick={() => dispatch(deleteTodo(todo.id))} style={cardStyle}/>
            <Edit className='editIcon' onClick={() => handleEdit(todo)} style={cardStyle}/>
            
            </div>
        </>
        
    );
};

export default TodoCard;