import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./ExampleSlice";
import { deleteTodo } from "./TodoSlice";


const Todos =()=>{
    const Todo = useSelector((state)=>state.todos);
    const[text,setText] =useState("");
    const dispatch = useDispatch();
    

    const handleTodov=()=>{
        if(text.trim()!==""){
            dispatch(addTodo(text));
            setText("")
        }
    }


    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleTodov}>Add</button>
            <ul>
                {Todo.map((items)=>
                 <li key={items.id}>
                 {items.text}
                       <button onClick={()=>dispatch(deleteTodo(items.id))}>delete</button>
                 </li>
                
                )}
            </ul>
        </div>
    )
}
export default Todos;