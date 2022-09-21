import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GoogleService from "../../../services/auth/google.service";
import { RootState } from "../../app/store";

// Get user information from local storage

const initialState: IGoogleAuthState = {
  status: "idle",
  error: "",
  target_url: "",
};

const googleService = new GoogleService();

// ======= HANDLE API START ==========

export const authenicateWithGoogle = createAsyncThunk(
  "auth/google",
  async (data, thunkAPI) => {
    try {
      const response = await googleService.signupWithGoogle();
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

const googleAuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.error = "";
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenicateWithGoogle.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(authenicateWithGoogle.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.target_url = payload?.data.target_url;
      })
      .addCase(authenicateWithGoogle.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload as string;
      })
     
  },
});

export const getGoogleAuthState = (state: RootState) => state.googleAuth;
export const { resetState } = googleAuthSlice.actions;
export default googleAuthSlice.reducer;
