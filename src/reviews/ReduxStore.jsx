import { configureStore } from "@reduxjs/toolkit";
import inputReducer  from './ReduxSlice'


const ReduxStore = configureStore({
    reducer:{
        input:inputReducer,
    }
});
export default ReduxStore;