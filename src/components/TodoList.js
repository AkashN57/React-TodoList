import React from 'react'
import Todo from "./Todo"

function TodoList({todos,setTodos}) {

  return (
   <div className='todo-container'>
    <ul className='todo-list'>

        {todos.map((todo)=>{
          
            return(
            <Todo
                text={todo.text} 
                id={todo.id} 
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                />
                )
        })}
        
    </ul>
   </div>
  )
}

export default TodoList