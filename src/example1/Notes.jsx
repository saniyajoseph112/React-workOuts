import { addListener } from "@reduxjs/toolkit"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNote } from "./NoteSlice"



const Notes =()=>{
    const[title,setTitle] =useState("")
    const[content,setContent] = useState("")

    const note=useSelector((state)=>state.notes);
    const dispatch = useDispatch();



    const handleAddNotes =()=>{
        if (title && content){
            dispatch(addNote({title, content}));
            setTitle("");
            setContent("");
        };
    };


    return(
      <div>
        <h1>notes</h1>
        <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea  placeholder="content" value={content} onChange={(e)=>setContent(e.target.value)}/>


        <button onClick={handleAddNotes}>add</button>    



        

        <ul>
            {note.map((notes)=>(
                <li key={notes.id}>
                    <b>{notes.title}:</b> {notes.content}
                </li>
            ))}
        </ul>
      </div>
    )

}
export default Notes;