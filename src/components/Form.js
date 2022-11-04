import React from 'react'

function form({inputText,setInputText,todos,setTodos,setStatus}) {

    const handleChange=(e)=>{

        setInputText(e.target.value)
    }
    const submitTodoHandler = (e)=>{
        e.preventDefault();

        setTodos(()=>{
            return(
         [...todos,{text:inputText,completed:false,id: Math.random() * 1000}]
            )
        })
        setInputText('');

    }
   
  return (
    <form >
        <input value={inputText} type="text" className='todo-input' onChange={handleChange}></input>
        <button onClick={submitTodoHandler} className='todo-button' type='submit'><i className='fas fa-plus-square'></i></button>
        <div className='select'>
            <select  className='filter-todo' name='todos'>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default form