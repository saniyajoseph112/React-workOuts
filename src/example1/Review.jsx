import { use } from "react";
import { useEffect, useState } from "react"


const Review =()=>{
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log("mounted compoment");
    })

    useEffect(()=>{
        console.log("mounted compoment");
    },[count])


    useEffect(()=>{
        console.log("umounted compoment");

        return ()=>{
            console.log("monted,compoment");
        }
    },[])

    const increment =()=>{
        setCount((prev)=>prev+ 1)
    }

    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={increment}>b</button>
        </div>
    )
}

export default Review;