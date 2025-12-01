import { useDispatch, useSelector } from "react-redux"
import { updateemail, updatename } from "../example1/ProfileSlice";
import { useState } from "react";



const Profile=()=>{
    const {name,email} =useSelector((state)=>state.profile);
    const dispatch = useDispatch()
    const[Name,setName]=useState("")
    const[Email, setEmail]=useState("")


    
    const handledata =()=>{
        if(name.trim() == "" && email.trim() == ""){
            return
        }
        dispatch(updatename(Name))
        dispatch(updateemail(Email))

    }

    return(
        <div>
            <h1>userprofile</h1>
            <input type="text" placeholder="enter the name" value={Name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="enter the email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={handledata}>add</button>

            <h3>previous</h3>
            <p>name:{name}</p>
            <p>email:{email}</p>
        </div>
    )
}
export default Profile;