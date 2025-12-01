import { useRef } from "react"
import SendChild from "./SendChild";


const SendParent=()=>{
    const dataRef = useRef("");


    const handleShowData =()=>{
        alert("hello from parent:"+ dataRef.current);
    };


    return(
        <div>
            <h1>this Parent</h1>
            <SendChild refData={dataRef}/>
            <button onClick={handleShowData}>show data child</button>
        </div>
    )

}
export default SendParent;