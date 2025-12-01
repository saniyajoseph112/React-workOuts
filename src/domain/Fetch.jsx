import {useState,useEffect} from 'react'


const Fetch =()=>{
    const[data,Setdata]=useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>res.json())
        .then((json)=>Setdata(json))
    },[])

    if(!data) return <p>loading</p>

    return(
        <div>
            <h1>data:{data.title}</h1>
            
        </div>
    )
}
export default Fetch

