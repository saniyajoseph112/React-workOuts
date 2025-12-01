import { useCallback } from "react"
import Child from "./Child";


const Parent =()=>{
    const sendMessage = useCallback(()=>{
        return "message sent to parent child"
    },[]);

    return(
        <div>
            <h1>hello parent</h1>
            <Child message={sendMessage}/>
        </div>
    )
}
export default Parent;