import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './TodoSlice'



const TodoStore = configureStore({
    reducer:{
        todos:TodoReducer
    }
})
export default TodoStore