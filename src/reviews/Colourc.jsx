import { useState } from "react"


const Colourc =()=>{
    const[BgColour,setColor]= useState("good morning")


    const handlecolor =()=>{
        setColor((BgColour)=>
    BgColour === 'good morning'? 'good affermoon' : "good morning")
    }



    return(
        <div>
            <h1>{BgColour}</h1>
          <button onClick={handlecolor}>color</button>

            
        </div>
    )
}
export default Colourc;