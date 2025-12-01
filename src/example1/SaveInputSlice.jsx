import { createSlice } from "@reduxjs/toolkit";

const SaveInputSlice =createSlice({
    name:'input',
    initialState:{
        value:""
    },
    reducers:{
        SaveInput:(state,action)=>{
            state.value = action.payload
        },
    },
});

export const{SaveInput} = SaveInputSlice.actions;
export default SaveInputSlice.reducer;