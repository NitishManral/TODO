import React, { useEffect, useState } from 'react'; // Import useState
import { useDispatch, useSelector } from 'react-redux'; // Import hooks from react-redux
import {  setSearchTerm, selectFilteredTodos } from '../app/store'; // Adjust the import path as necessary
import '../styles/TodosFun.css';
import TodoCard  from './TodoCards';
const TodosFun = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    // Correctly pass the entire state to the selector
    const filteredTodos = useSelector(state => selectFilteredTodos(state));
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        dispatch(setSearchTerm(search));
        console.log(filteredTodos);
    }, [search, dispatch, filteredTodos]); // Add filteredTodos to the dependency array to re-run the effect when it changes
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    });
    return (
        <div className='todosFun'>
            <input
                className='searchBar'
                type="search"
                placeholder='Search todos'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className='todoListContainer'>
                {isLoading ? (
                <div className="loader"></div> 
                ) : filteredTodos.length > 0 ? (
                    filteredTodos.map(todo => (
                        <TodoCard key={todo.id} todo={todo}/>
                    ))
                ) : (
                    <div className='noTodos'>No todos</div>
                )}
            </div>
        </div>
    );
};

export default TodosFun;

