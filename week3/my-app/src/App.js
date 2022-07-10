import React, { useState } from 'react';
import {TodosArr} from "./Store"
//components
import Header from "./Header";
import ToDoList from './TodoList';

import './App.css';

function App() {
  const [toDoList, setToDoList] = useState(TodosArr);


  const isCompleted = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
