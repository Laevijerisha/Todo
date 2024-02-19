import React,{useState}from 'react'
import Todoform from './Todoform'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import EditTodoform from './EditTodoform';
uuidv4();
function TodoWrapper() {
    const[todos,setTodos]=useState([])
    const addTodo=todo=>{
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
        console.log(todos)
    }
    const toggleCompleted = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo , completed : !todo.completed}: todo))
    }
    const deleteTodo=id=>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo= id =>{
        setTodos(todos.map(todo => todo.id ===id ? {...todo , isEditing : !todo.isEditing }: todo))

    }
    const editTask =(task,id)=>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing:!todo.isEditing}:todo))

    }
    return (
        <div className='TodoWrapper'>
            <h1>Go To Bed Satisfied!!</h1>
            <Todoform addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                todo.isEditing ? ( 
                   
                    <EditTodoform editTodo={editTask} task={todo}/>
                ):(
                <Todo task={todo} key={index} toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo} editTodo={editTodo}/> 
            )))}
               
                        
        </div>
    )
}

export default TodoWrapper
