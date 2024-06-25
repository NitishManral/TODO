import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../app/store'; 
import "../styles/AddTodo.css";

const EditTodo = ({ todoToEdit = null, onClose = () => {} }) => {
    const [isModalOpen, setIsModalOpen] = useState(true); 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setTitle(todoToEdit ? todoToEdit.title : '');
        setDescription(todoToEdit ? todoToEdit.description : '');
    }, [todoToEdit]);

    const handleUpdate = () => {
        if (todoToEdit) {
            if(title===''){
                setTitle('Untitled');
            }
            if(description===''){
                setDescription('No description');
            }
            dispatch(editTodo({
                id: todoToEdit.id,
                title,
                description
            }));
        }
        onClose(); 
    };

    return (
        <div className="modal">
            <div className="modalContent">
                <span className="close" onClick={onClose}>&times;</span>
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
                <button className='createTodoBtn' onClick={handleUpdate}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditTodo;