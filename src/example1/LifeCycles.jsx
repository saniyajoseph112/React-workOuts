import { useEffect, useState } from "react";


export default function  LifeCycles(){
    const[Count,setCount] = useState(0)


    useEffect(()=>{
        console.log("compoment mounted")

    })

    useEffect(()=>{
        console.log('compoment:',Count)

    },[Count])

    useEffect(()=>{
        console.log('compoment mounted')
        return()=>{
            console.log('compoment unmonted');
            setCount(0)
        };
    },[])

    const increment=()=>{
        setCount((prev)=> prev+ 1)

    }

    return(
        <div>
            <h1>count:{Count}</h1>
            <button onClick={increment}>b</button>
        </div>
    )

}