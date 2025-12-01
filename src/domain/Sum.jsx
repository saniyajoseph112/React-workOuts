import {useState} from 'react'


const Sum =()=>{
    const[num,SetNum]=useState(0)
    const[num1,SetNum1]=useState(0)
    const[sum,Setsum]=useState(0)


    const Handlesum =()=>{
        Setsum(Number(num)+ Number(num1))
    }

    return(
        <div>
            <input type="number" value={num} onChange={(e)=>SetNum(e.target.value)}/>
            <input type="number" value={num1} onChange={(e)=>SetNum1(e.target.value)}/>
            <button onClick={Handlesum}>sum</button>
            <h1>sum:{sum}</h1>
        </div>
    )
}
export default Sum