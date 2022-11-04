import React, { useState,useEffect } from "react"
import './App.css';
import Form from "./components/Form"
import TodoList  from "./components/TodoList";

function App() {

  //Hooks
  const [inputText,setInputText] = useState('')
  const [todos,setTodos] = useState([])
  

  
  return (
    <div className="App">
     <header>
      <h1>Akash's Todo List</h1>
     </header>
      <Form
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
     
      />
      <TodoList
       todos={todos}
       setTodos={setTodos}
      />
    </div>
  );
}

export default App;
