import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/auth/user.service";
import { RootState } from "../../app/store";

const initialState: ICountryStateType = {
  states: [],
  status: "idle",
  errors: "",
};

const userService = new UserService();
// ======= HANDLE API START ==========
export const getCountryStateApi = createAsyncThunk(
  "user/state",
  async (data: string, thunkAPI) => {
    return await userService.getCountryState(data);
  }
);
// ======= HANDLE API END ==========

const countryStateSlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountryStateApi.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(getCountryStateApi.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.states = payload.data;
      })
      .addCase(getCountryStateApi.rejected, (state, { error }) => {
        state.status = "failed";
        state.errors = error.message;
      });
  },
});

export const getAllCountryState = (state: RootState) => state.states;
export default countryStateSlice.reducer;
