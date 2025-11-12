import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            localStorage.setItem("userData", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            localStorage.removeItem("userData");
        },
        loadUser: (state) => {
            const storedUser = localStorage.getItem("userData");
            if (storedUser) {
                state.status = true;
                state.userData = JSON.parse(storedUser);
            }
        },
    },
});

export const { login, logout, loadUser } = authSlice.actions;

export default authSlice.reducer;