import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './NoteSlice';


const NoteSlice = configureStore({
    reducer:{
        notes:notesReducer
    }
});
export default NoteSlice;