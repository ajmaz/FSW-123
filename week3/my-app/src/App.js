import React, { useState } from 'react';
import './components/Todo.css';
import { TodosArr } from "./components/Store"
import { v4 as uuidv4 } from "uuid"
import TodoList from './components/TodoList'



function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) {
            alert("Todo is Empty");
            return
        }

        addTodo(value);
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
            <button className="submitBtn" onClick={handleSubmit}> Submit </button>
        </form>
    );
}








function App() {
    const [todos, setTodos] = useState(TodosArr);

    const addTodo = text => {
        const newTasks = [...todos, { text, completed: false, id: uuidv4() }];
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
            <div className="header">MY TO-DO LIST</div>
            <div className="create-task" >
                <TodoForm
                    addTodo={addTodo} />
            </div>
            <TodoList
                todos={todos}
                completeTask={completedTodo}
                removeTask={deleteTodo} />

        </div>
    );
}

export default App;