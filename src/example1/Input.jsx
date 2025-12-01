import { useDispatch, useSelector } from "react-redux"
import { setInput } from "./InputSlice";


const Input =()=>{
    const value = useSelector((state)=>state.Inputs.value);
    const dispacth =useDispatch();



    return(
        <div>
        <input type="text" value={value} onChange={(e)=>dispacth(setInput(e.target.value))}/>

        <p>value:{value}</p>
        </div>
    )
}
export default Input;