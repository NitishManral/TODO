import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/store'; 
import "../styles/AddTodo.css";
import {ReactComponent as Cross} from '../assets/cross.svg';
const AddTodo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleCreate = () => {
        // Dispatch the addTodo action with title and description
        if(title===''){
            setTitle('Untitled');
        }
        if(description===''){
            setDescription('No description');
        }
        dispatch(addTodo(title, description));
        // Close the modal and reset the form
        setIsModalOpen(false);
        setTitle('');
        setDescription('');
    };

    return (
        <>
            <button className='addTodo' onClick={toggleModal}>+</button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modalContent">
                        <Cross className="close" onClick={toggleModal}/>
                        <input 
                            className='titleInput' 
                            type="text" 
                            placeholder="Title" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea 
                            className='desInput' 
                            placeholder="Description" 
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>                        
                        <button className='createTodoBtn' onClick={handleCreate}>Create</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddTodo;