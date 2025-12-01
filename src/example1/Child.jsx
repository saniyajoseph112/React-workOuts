import react  from 'react';


const Child =({message})=>{
    return(
        <div>
            <h2>child compoment</h2>
            <p>{message()}</p>
        </div>
    )
}
export  default Child;