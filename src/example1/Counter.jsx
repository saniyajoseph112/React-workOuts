import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../example1/CounterSlice"




const Counter =()=>{
    const count = useSelector((state)=>state.count.value)
    const dispacth = useDispatch()



    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>dispacth(increment())}>+</button>
            <button onClick={()=>dispacth(decrement())}>-</button>
            <button onClick={()=>dispacth(reset())}>0</button>
        </div>
    )
}
export default Counter