

function Todo({ task, id, completeTask, removeTask, setTodoEditing }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}>
            <input type="checkbox" onChange={() => completeTask(id)}></input>
            {task.text}
            <button  onClick={() => removeTask(id)}>x</button>
            <button  onClick={() => setTodoEditing(id)}>edit</button>

        </div>
    );
}

export default Todo