import React from 'react'
import Todo from './Todo'

function TodoList({ todos, completeTask, removeTask }) {
    return (
        <div className="tasks">
            {todos.map((task, id) => (
                <Todo
                    task={task}
                    id={id}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={task.id}
                />
            ))}
        </div>
    )
}

export default TodoList