import { createSlice } from "@reduxjs/toolkit";


const EmailSlice = createSlice({
    name:'Email',
    initialState:{
        userEmail:"",
    },
    reducers:{
        setEmail:(state,action)=>{
            state.userEmail = action.payload

        }
    }
});
export const  {setEmail} = EmailSlice.actions;
export default EmailSlice.reducer;