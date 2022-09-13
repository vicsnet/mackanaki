import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Get user information from local storage
const user = JSON.parse(localStorage.getItem("user") as string);

const initialState: IAuthState = {
    user: user ? user : null,
    // user: {},
    status: "loading"
};


const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {}
});


export const getUserInfo = (state: RootState) => state.auth;
export default authSlice.reducer;