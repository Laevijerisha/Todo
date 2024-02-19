import React ,{useState}from 'react'

function Todoform({addTodo}) {
    const[value,setValue]=useState("")
    const handleSubmit = e => {
        e.preventDefault(); //prevent reload
       addTodo(value)
       setValue("") // clear the current wfb
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input'value ={ value} placeholder='What is the task today?' onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add task</button>
        </form>
    )
}

export default Todoform
