import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileSlice";  



const ProfileStore = configureStore({
    reducer:{
        profile:profileReducer
    }
});

export default ProfileStore;