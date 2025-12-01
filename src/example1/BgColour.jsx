import React, { useState } from 'react'

const BgColour = () => {
    const[BgColour,SetColour]=useState("white")
  return (
    <div style={{background:BgColour}}>
     <label>
        <input type='radio' value={'red'} onChange={(e)=>SetColour(e.target.value)}
        />
        red
        </label> 

        <label>
            <input type='radio' value={'green'} onChange={(e)=>SetColour(e.target.value)}/>
            green

            </label>  

            
      
    </div>
  )
}

export default BgColour
