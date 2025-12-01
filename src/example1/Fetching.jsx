import { useEffect, useState } from "react";



export default function Fetching(){
    const[data,setData]=useState(null);



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>res.json())
        .then((json)=>setData(json))
    },[])

    if(!data) return <p>loading...</p>


    return(
        <div>
            <h1>data:{data.title}</h1>
        </div>
    )
}