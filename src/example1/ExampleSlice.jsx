import { createSlice } from "@reduxjs/toolkit";

const EXampleSlice =createSlice({
    name:'Todo',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({
                id:Date.now(),
                Text:action.payload,
                complete:false,
                
            })
            
        },

        toggleTodo:(state,action)=>{
            const todo =state.find((t)=t.id==action.payload);
            if(todo){
                todo.complete !=todo.complete
            }
        }

    }


  
});
export const {addTodo,toggleTodo} =EXampleSlice.actions;
export default EXampleSlice.reducer;