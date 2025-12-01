import { configureStore } from "@reduxjs/toolkit";
import saveReducer from './SaveInputSlice';


const SaveStore = configureStore({
    reducer:{
        input:saveReducer,
    },
});
export default SaveStore;