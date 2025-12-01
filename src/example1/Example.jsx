import { useDispatch, useSelector } from "react-redux"
import { addTodo ,toggleTodo} from "./ExampleSlice";
import { useState } from "react";



const Example =()=>{
    const Todo =useSelector((state)=>state.todos);
    const [Text,setText] = useState('');
    const dispatch = useDispatch();



    const handleadd = ()=>{
        if(Text.trim() !== ""){
            dispatch(addTodo(Text));

            
            setText("");
            }
        };
    
    




    return(
        <div>
          <input type="text" 
          value={Text} 
          onChange={(e)=>setText(e.target.value)}/>

          <button onClick={handleadd}>Add</button>
          <ul>
            {Todo.map((items)=>(
            <li key={items.id}>
                <span  onClick={()=>dispatch(toggleTodo(items.id))}>{items.Text}</span>
                

            </li>
            ))}
          </ul>
         


         
          
            
        </div>
    )
}
export default Example;