import { configureStore } from "@reduxjs/toolkit";
import EmailReducer from  './EmailSlice';



const EmailStore = configureStore({
    reducer:{
        email:EmailReducer,
    },
});
export default EmailStore;