import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './ExampleSlice';


const ExampleStore = configureStore({
    reducer:{
        todos:todoReducer
    },
});
export default ExampleStore