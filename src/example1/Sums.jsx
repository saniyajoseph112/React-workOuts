


import React, { useState } from 'react'

const Sums = () => {
    const[num1,setNum1]=useState(0);
    const[num2,setNum2] = useState(0);
    const[sum,setSum]=useState(0);


    const handleSum =()=>{
          setSum(Number(num1)+ Number(num2))
    };



  return (
    <div>
      <input type='number' value={num1} onChange={(e)=>setNum1(e.target.value)} placeholder='here'/>
      <input type='number'  value={num2} onChange={(e)=>setNum2(e.target.value)} placeholder='here.'/>
       
       <button onClick={handleSum}>sum</button>
       <h1>sum:{sum}</h1>
    </div>
  )
}

export default Sums
