import { useEffect,useRef } from "react";


export default function RefText(){
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus();
},[])
return(
    <div>
        <input ref={inputRef} type="text" placeholder="here . is"/>
        <button onClick={()=>inputRef.current.focus()}>focus</button>
    </div>
)

}