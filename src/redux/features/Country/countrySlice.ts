import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import UserService from "../../../services/auth/user.service";
import { RootState } from "../../app/store";

const initialState: ICountryState = {
  countries: [],
  status: "idle",
  errors: "",
};

const userService = new UserService();
// ======= HANDLE API START ==========
export const getCountriesApi = createAsyncThunk("user/country", async () => {
  return await userService.getCountries();
});
// ======= HANDLE API END ==========

const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesApi.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(getCountriesApi.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.countries = payload.data;
      })
      .addCase(getCountriesApi.rejected, (state, { error }) => {
        state.status = "failed";
        state.errors = error.message;
      });
  },
});

export const getAllCountries = (state: RootState) => state.country;
// export const getSelectedState = createSelector(
//   [getAllCountries, (state: RootState, stateId) => stateId],
//   (country, stateId) =>
//     country.countries.find((country) => country.id === stateId)
// );
export default countrySlice.reducer;
