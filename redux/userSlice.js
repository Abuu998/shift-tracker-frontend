import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("loggedIn")) || {},
    isLoading: false
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logInUser: (state, action) => {
            localStorage.setItem("loggedIn", JSON.stringify(action.payload))
            state.user = action.payload
        },
        logoutUser: (state) => {
            localStorage.removeItem("loggedIn")
            state.user = {}
        }
    }
})

export const { logoutUser, logInUser } = userSlice.actions

export default userSlice.reducer
