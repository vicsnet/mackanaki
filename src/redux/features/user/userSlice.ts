import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth/auth.service";
import { RootState } from "../../app/store";

const initialState = {
  // user: {},
  status: "loading",
};

const authService = new AuthService();

// ======= HANDLE API START ==========
// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (userData, thunkAPI) => {
//     const response = await authService.register(userData);
//     return response.data;
//   }
// );
// ======= HANDLE API END ==========

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

export const getUserInfo = (state: RootState) => state;
export default authSlice.reducer;
