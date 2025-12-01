import { configureStore } from "@reduxjs/toolkit";
import inputReducer from './InputSlice';

const InputStore =configureStore({
    reducer:{
        Inputs:inputReducer,
    },
});
export default InputStore;