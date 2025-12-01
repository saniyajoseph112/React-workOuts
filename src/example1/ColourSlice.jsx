import { createSlice } from "@reduxjs/toolkit";


const ColourSlice = createSlice({
    name:'colour',
    initialState:{
        bgcolour:'white'
    },
    reducers:{
        setBgcolour:(state,action)=>{
            state.bgcolour = action.payload
        },
    },
});
export const{setBgcolour} = ColourSlice.actions;

export default ColourSlice.reducer;