import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {toggleText } from "./TextSlice";



const Textt=()=>{
    const text = useSelector((state)=>state.Text.value)
    const dispatch = useDispatch()




    return(
        <div>
            <h1>text:{text}</h1>
            <button onClick={()=>dispatch(toggleText())}>change</button>
        </div>
    )
}
export default Textt;
   
