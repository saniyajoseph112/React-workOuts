

import React, { useState } from 'react'

const ChangeText = () => {

    const[Text,setText] = useState('hello world');

    const handleText =()=>{
        setText((prev)=>
            prev === 'hello world' ? 'saniya is hear' : 'hello world'
        )
    }
  return (
    <div>
      <h1>text:{Text}</h1>
      <button onClick={handleText}>button</button>
    </div>
  )
}

export default ChangeText
