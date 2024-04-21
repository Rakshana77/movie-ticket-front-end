import { createSlice, configureStore } from "@reduxjs/toolkit";
const userslice = createSlice({
    name: "user",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            localStorage.removeItem("userid")
            state.isLoggedIn = false;

        },
    },
});
const adminslice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false  },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            localStorage.removeItem("adminid")
            localStorage.removeItem("token")
            state.isLoggedIn = false;

        },
    },
});
export const useractions = userslice.actions;
export const adminactions = adminslice.actions;
export const store = configureStore({
    reducer: {
        user: userslice.reducer,
        admin: adminslice.reducer,
        
    },
});