import { useEffect,useState } from "react";



const Lifecycle =()=>{
    const[count,setCount] = useState(0);


    useEffect(()=>{
        console.log("mounted compement");
    });

    useEffect(()=>{
        console.log("mounted compoment");
    },[count])


    useEffect(()=>{
        console.log("umounted compoment");
        return ()=>(
            setCount()
        )
    },[])

    const increment =()=>{
        setCount((prev)=>prev+1)
    };


    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    )


}
export default Lifecycle;