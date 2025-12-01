import { createSlice } from "@reduxjs/toolkit";

const InputSlice = createSlice({
    name:'Input',
    initialState:{
        value:""
    },
    reducers:{
        setInput:(state,action)=>{
            state.value = action.payload
        }
    }

});
export const {setInput} = InputSlice.actions;
export default InputSlice.reducer;