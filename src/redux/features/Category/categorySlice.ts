import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/auth/user.service";
import { RootState } from "../../app/store";

const initialState: ICategoryState = {
  categories: [],
  status: "idle",
  errors: "",
};

const userService = new UserService();
// ======= HANDLE API START ==========
export const getCategoriesApi = createAsyncThunk(
  "user/categories",
  async () => {
    return await userService.getCategories();
  }
);
// ======= HANDLE API END ==========

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesApi.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(getCategoriesApi.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.categories = payload.data;
      })
      .addCase(getCategoriesApi.rejected, (state, { error }) => {
        state.status = "failed";
        state.errors = error.message;
      });
  },
});

export const getAllCategories = (state: RootState) => state.category;
export default categorySlice.reducer;
