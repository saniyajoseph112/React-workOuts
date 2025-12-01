import { configureStore } from "@reduxjs/toolkit";
import UseReducers from "./useSlice";

const UseStore = configureStore({
  reducer: {
    user: UseReducers,
  },
});

export default UseStore;
