import { configureStore } from "@reduxjs/toolkit";
import shiftReducer from "./shiftSlice";
import userReducer from "./userSlice"



const store = configureStore({
    reducer: {
        shifts: shiftReducer,
        user: userReducer
    }
})

export default store
