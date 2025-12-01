import { useState } from "react"



const Todo =()=>{
    const[todo,setTodos] = useState([])
    const[input,setInput] = useState("")

    const addtodo=()=>{
        if (input.trim()==="") return;
  

    const newadd={
        id:Date.now(),
        text:input,
        complete:false,


    };
    setTodos([...todo,newadd]);

    setInput("");
};
return(
    <div>
        <h2>todos</h2>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

        <button  onClick={addtodo}>addtodo</button>


        <ul>
            {todo.map((todos)=>(
                <li key={todos.id}>{todos.text}</li>

            ))}
        </ul>
    </div>
)


}
export default Todo;