import {createSlice}  from '@reduxjs/toolkit';

const TodoSlice = createSlice({
    name:'Todo',
    initialState:{
        value:[]
    },
    reducers:{
        addText:(state,action)=>{
            state.value=action.payload


        }
            
        }
    }
)
export const {addText} =TodoSlice.actions
export default TodoSlice.reducer;