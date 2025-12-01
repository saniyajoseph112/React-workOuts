import { createSlice } from "@reduxjs/toolkit";


const ReduxSlice = createSlice({
    name:'notes',
    initialState:[],
        
    
    reducers:{
        addnotes:(state,action)=>{
            state.push({
                id:Date.now(),
                title:action.payload.title,
                content:action.payload.content,
            })
        }
    }
});
export const{addnotes} = ReduxSlice.reducer;
export default ReduxSlice.actions;
