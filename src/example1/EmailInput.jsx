import { useState } from "react"
import { useDispatch } from "react-redux";
import {setEmail} from  './EmailSlice'



const Emaillnput =()=>{
    const[Email,setLocalemail] = useState("");
    const dispatch = useDispatch();




    const handletoSave =()=>{
        dispatch(setEmail(Email));
        setLocalemail("");
    };


    return(
        <div>
            <h2>enter the email</h2>
            <input type="email"  value={Email} onChange={(e)=>setLocalemail(e.target.value)} placeholder="enter the email"/>
            <button  onClick={handletoSave}> save email</button>
        </div>


    )






}
export default Emaillnput;