import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/auth/user.service";
import { RootState } from "../../app/store";

const profile = JSON.parse(localStorage.getItem("profile") as string);
const initialState: IUserProfileState = {
  data: profile ? profile : null,
  status: "idle",
  error: "",
  userEditStatus: "idle",
};

const authService = new UserService();

// ======= HANDLE API START ==========
export const userProfile = createAsyncThunk(
  "user/profile",
  async (data, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).login.token as string;
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

export const userProfileApi = createAsyncThunk(
  "user/profile-edit",
  async (data: EditProfileType, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).login.token as string;
      const response = await authService.userProfileEdit(data, token as string);
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
  reducers: {
    fetchUserProfileFromLS: (state) => {
      state.data = authService.getUserProfileFromLocalStorage;
    },
    profileStateReset: (state) => {
      state.status = "idle";
      state.userEditStatus = "idle";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(userProfile.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.data = payload?.data;
        authService.updateUserProfileInLS(payload?.data);
      })
      .addCase(userProfile.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      .addCase(userProfileApi.pending, (state, { payload }) => {
        state.userEditStatus = "loading";
      })
      .addCase(userProfileApi.fulfilled, (state, { payload }) => {
        state.userEditStatus = "success";
      })
      .addCase(userProfileApi.rejected, (state, { payload }) => {
        state.userEditStatus = "failed";
        state.error = payload as string;
      });
  },
});

export const getUserProfileData = (state: RootState) => state.userProfile;

export const { profileStateReset, fetchUserProfileFromLS } =
  userProfileSlice.actions;
export default userProfileSlice.reducer;
