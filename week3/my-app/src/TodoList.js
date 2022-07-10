import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                
                   <ToDo todo={todo} />
                   
               )
           })}
       </div>
   );
};
 
export default ToDoList;


// function TodoList ({ todos }) {

//     const listItems = todos.map((todo) => {
//         return (
//             <div key={todo.index}>
//                 <li>{todo.text}</li>
//             </div>
//         )
//     })
//     return (
//         <h1>
//             {listItems}
//         </h1>
//     )
// }