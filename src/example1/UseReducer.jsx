import { useReducer } from "react"
import { increment } from "./CounterSlice"



const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return{count:state.count + 1}
        case 'decrement':
            return{count:state.count - 1}
        case 'reset':
            return{count:0}
            
        default:
            return state    
    }


   
}

 const UseReducer =()=>{
        const[state,dispacth]=useReducer(reducer,{count:0})


        return (
            <div>
                <h1>{state.count}</h1>
                <button onClick={()=>dispacth({type:"increment"})}>+</button>
            </div>
        )
    }
export default UseReducer;    