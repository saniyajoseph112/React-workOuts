import { useDispatch, useSelector } from "react-redux"
import { setBgcolour } from "./ColourSlice";


const Colour = ()=>{
    const color = useSelector((state)=>state.colour.bgcolour);
    const dispatch = useDispatch()



    return(
        <div style={{background:color}}>
            <label>
                <input type="radio" name="color" value={'red'} onChange={(e)=>dispatch(setBgcolour(e.target.value))}/>
                
           red
            </label>
            <label>
                <input type="radio" name="color" value={'green'} onChange={(e)=>dispatch(setBgcolour(e.target.value))}/>
                green
            </label>

        </div>
    )
}
export default Colour;