import { createSlice } from "@reduxjs/toolkit";


const TextSlice = createSlice({
    name:'Text',
    initialState:{
        value:'hello world'
    },
    reducers:{
       toggleText:(state)=>{
        state.value = state.value ==='hello world' ? 'hello saniya' :'hello world'

       }
        
    }
})
export const{toggleText} = TextSlice.actions
export default TextSlice.reducer;