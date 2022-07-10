import React from 'react';
 
const ToDo = ({todo}) => {
   return (
       <div className= {todo.complete ? "strike" : ""}>
           {todo.text}
       </div>
   );
};
 
export default ToDo;