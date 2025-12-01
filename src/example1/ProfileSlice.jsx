import { createSlice } from "@reduxjs/toolkit";


const ProfileSlice =createSlice({
    name:'profile',
    initialState:{
        name:'',
        email:'',
    },
    reducers:{
        updatename:(state,action)=>{
            state.name  = action.payload
        },
        updateemail:(state,action)=>{
            state.email = action.payload
        },

    },

});
export const{updatename,updateemail}=ProfileSlice.actions;
export default ProfileSlice.reducer;
