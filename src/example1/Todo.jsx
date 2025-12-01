import { useState } from "react"


const Todo =()=>{
    const[task,setTask] =useState("")
    const[Todos,setTodos] =useState([])



    const addTodo =()=>{
        if(task.trim()!==""){
            setTodos([...Todos,task])
            setTask(0)
        }
    }


    return(
        <div>
            <h1>todo app</h1>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>

            <button onClick={addTodo}>add</button>

            <ul>
                {Todos.map((todo,index)=>
                  <li key={index}>{todo}</li>
                )}
            </ul>
        </div>
    )
}
export default Todo;