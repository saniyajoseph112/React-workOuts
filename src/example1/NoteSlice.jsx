import { createSlice } from "@reduxjs/toolkit";



const NoteSlice =createSlice({
    name:'note',
    initialState:[],
    reducers:{
        addNote:(state,action)=>{
            state.push({
                id:Date.now(),
                title:action.payload.title,
                content:action.payload.content
            })
        },
    },

    
});
export const{addNote} = NoteSlice.actions
export default NoteSlice.reducer;