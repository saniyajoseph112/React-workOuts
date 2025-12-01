import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SaveInput } from "./SaveInputSlice";


const Save = ()=>{
    const value = useSelector((state)=>state.input.value);
    const dispacth=useDispatch();
    const[text,setText] = useState("")


    const handlesave =()=>{
        if(text.trim()!=""){
            dispacth(SaveInput(text));
            setText("");
        }
    }

    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handlesave}>add</button>
            <p>value:{value}</p>
        </div>
    )


}
export default Save;