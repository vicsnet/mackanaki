import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth/auth.service";
import { RootState } from "../../app/store";

// Get user information from local storage
// const user = JSON.parse(localStorage.getItem("user") as string);

const initialState: IVerifyState = {
  verified: false,
  status: "idle",
  error: "",
};

const authService = new AuthService();

// ======= HANDLE API START ==========
export const verifyEmail = createAsyncThunk(
  "user/verify",
  async (userData: { [props: string]: string }, thunkAPI) => {
    try {
      const response = await authService.verifyEmail(userData);
    
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

const verifyEmailSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.verified = payload?.status;
      })
      .addCase(verifyEmail.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload as string;
      });
  },
});

export const getVerifyEmailState = (state: RootState) => state.verifyEmail;
export default verifyEmailSlice.reducer;
