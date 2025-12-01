import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addnotes} from "./ReduxSlice";
import { addNote } from "../example1/NoteSlice";


const Redux =()=>{
    const[title,setTitle] = useState("");
    const[content,setContent]=useState("");
    const value = useSelector((state)=>state.input);
    const dispatch =useDispatch();


    const handleSave=()=>{
        if(title && content){
            dispatch(addnotes(title,content));
            setTitle("")
            setContent("")
        }
    }


    return(
        <div>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>

            <button onClick={handleSave}>add</button>

            <h1>value:{}</h1>
        </div>
    )
};
export default Redux;

