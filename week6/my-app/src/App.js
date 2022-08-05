import React, { useCallback, useEffect, useRef, useState } from 'react';
import './components/Todo.css';
import { TodosArr } from "./components/Store"
import { v4 as uuidv4 } from "uuid"
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'




function App() {
    const [todos, setTodos] = useState(TodosArr);
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");

    const addTodo = text => {
        const newTasks = [...todos,
        { text, completed: false, id: uuidv4() }];
        setTodos(newTasks);
    };

    const completedTodo = id => {
        const newTasks = [...todos];
        newTasks[id].completed = true;
        setTodos(newTasks);
    };

    const deleteTodo = id => {
        const newTasks = [...todos];
        newTasks.splice(id, 1);
        setTodos(newTasks);
    };


    return (
        <div className="todo-container">
            <h1 className="header">MY TO-DO LIST</h1>
            <div className="create-task" >
                <TodoForm
                    addTodo={addTodo} />
            </div>
            <TodoList
                todos={todos}
                completeTask={completedTodo}
                removeTask={deleteTodo} 
                editTask = {setTodoEditing}/>

        </div>
    );
}

export default App;