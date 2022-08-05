import React, { useState } from 'react';



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

export default TodoForm