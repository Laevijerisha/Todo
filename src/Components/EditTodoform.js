import React ,{useState}from 'react'

function EditTodoform({editTodo,task}) {
    const[value,setValue]=useState(task.task)
    const handleSubmit = e => {
        e.preventDefault(); //prevent reload
        
       editTodo(value,task.id)
       setValue("") // clear the current wfb
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input'value ={ value} placeholder='Update task' onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}

export default EditTodoform
