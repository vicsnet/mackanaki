import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth/auth.service";
import { RootState } from "../../app/store";

// Get user information from local storage
// const user = JSON.parse(localStorage.getItem("user") as string);

const initialState: IRegisterState = {
  register: false,
  status: "idle",
  error: "",
};

const authService = new AuthService();

// ======= HANDLE API START ==========
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData: { [props: string]: string }, thunkAPI) => {
    try {
      const response = await authService.register(userData);
    
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// ======= HANDLE API END ==========

const registerSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.register = payload?.status;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload as string;
      });
  },
});

export const getRegisterState = (state: RootState) => state.register;
export default registerSlice.reducer;
