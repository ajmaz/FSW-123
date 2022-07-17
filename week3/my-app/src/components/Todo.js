

function Todo({ task, id, completeTask, removeTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}>
            <input type="checkbox" onChange={() => completeTask(id)}></input>
            {task.text}
            <button  onClick={() => removeTask(id)}>x</button>

        </div>
    );
}

export default Todo