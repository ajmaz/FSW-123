

function TodoList({ todos }) {

    const listItems = todos.map((todo) => {
        return (
            <div key={todo.index}>
                <li>{todo.text}</li>
            </div>
        )
    })
    return (
        <h1>
            {listItems}
        </h1>
    )
}


export default TodoList

