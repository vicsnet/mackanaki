import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/auth/user.service";
import { RootState } from "../../app/store";

const initialState: IUserProfileState = {
  data: null,
  status: "loading",
  error: "",
};

const authService = new UserService();

// ======= HANDLE API START ==========
export const userProfile = createAsyncThunk(
  "user/profile",
  async (data, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).login.token;
      const response = await authService.userProfile(token as string);
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

const userProfileSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(userProfile.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.data = payload?.data;
      })
      .addCase(userProfile.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      });
  },
});

export const getUserProfileData = (state: RootState) => state.userProfile;
export default userProfileSlice.reducer;
