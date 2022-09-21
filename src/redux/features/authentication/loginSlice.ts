import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth/auth.service";
import { RootState } from "../../app/store";

// Get user information from local storage
const token = JSON.parse(localStorage.getItem("token") as string);

const initialState: ILoginState = {
  token: token ? token : null,
  status: "idle",
  error: "",
};

const authService = new AuthService();

// ======= HANDLE API START ==========
export const loginUser = createAsyncThunk(
  "oauth/token",
  async (userData: { [props: string]: string }, thunkAPI) => {
    try {
      const response = await authService.login(userData);
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

const loginSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.error = "";
      state.token = null;
      state.status = "idle";
    },
    logout: (state) => {
      state.token = null;
      state.status = "idle";
      state.error = "";
      localStorage.removeItem("token");
    },
    gooogleAuthToken: (state, { payload }) => {
      state.status = "success";
      state.token = payload?.data?.access_token;
      localStorage.setItem(
        "token",
        JSON.stringify(payload?.data?.access_token)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.token = payload?.data?.access_token;
        localStorage.setItem(
          "token",
          JSON.stringify(payload?.data?.access_token)
        );
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload as string;
      });
  },
});

export const getLoginState = (state: RootState) => state.login;
export const { resetState, logout, gooogleAuthToken } = loginSlice.actions;
export default loginSlice.reducer;
