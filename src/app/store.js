import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit';

const loadTodosFromLocalStorage = () => {
  try {
    const serializedTodos = localStorage.getItem('todos');
    return serializedTodos ? JSON.parse(serializedTodos) : createDummyTodos();
  } catch (e) {
    console.error("Could not load todos from local storage", e);
    return createDummyTodos();
  }
};

const saveTodosToLocalStorage = (todos) => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem('todos', serializedTodos);
  } catch (e) {
    console.error("Could not save todos to local storage", e);
  }
};

const createDummyTodos = () => {
  const dummyTodos = [];
  for (let i = 1; i <= 50; i++) {
    const descriptionLength = Math.floor(Math.random() * (100 - 10 + 1)) + 10; // Random length between 10 and 100
    const description = `Description for Todo ${i} `.repeat(descriptionLength).slice(0, descriptionLength);
    dummyTodos.push({
      id: i, 
      title: `Todo ${i}`,
      description: description,
      state: false
    });
  }
  return dummyTodos;
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
  searchTerm: ''
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
        saveTodosToLocalStorage(state.todos);
      },
      prepare(title, description) {
        return { payload: { id: nanoid(), title, description, state: false } };
      }
    },
    toggleTodoState(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.state = !todo.state;
        saveTodosToLocalStorage(state.todos);
      }
    },
    deleteTodo(state, action) {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
        saveTodosToLocalStorage(state.todos);
      }
    },
    editTodo(state, action) {
      const { id, title, description } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        if (title !== undefined) {
          todo.title = title;
        }
        if (description !== undefined) {
          todo.description = description;
        }
        saveTodosToLocalStorage(state.todos);
      }
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  }
});

// Corrected selector
export const selectFilteredTodos = (state) => {
  const todos = state.todos.todos; 
  const searchTerm = state.todos.searchTerm;
  if (!searchTerm) return todos;
  return todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const { addTodo, toggleTodoState, deleteTodo, editTodo, setSearchTerm } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

store.subscribe(() => {
  saveTodosToLocalStorage(store.getState().todos.todos);
});

export default store;
