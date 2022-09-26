import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "../../../services/post/post.services";
import { RootState } from "../../app/store";

const initialState: IPostState = {
  post: [],
  status: "idle",
  errors: "",
};

const postService = new PostService();
// ======= HANDLE API START ==========
export const getAllPostApi = createAsyncThunk(
  "post/getAll",
  async (data, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).login.token;
      const response = await postService.getAllPost(token as string);
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

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostApi.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(getAllPostApi.fulfilled, (state, { payload }) => {
        console.log(payload?.data?.data);
        state.status = "success";
        state.post = payload?.data?.data;
      })
      .addCase(getAllPostApi.rejected, (state, { payload }) => {
        console.log(payload);
        state.status = "failed";
        state.errors = payload as string;
      });
  },
});

export const getAllPostState = (state: RootState) => state.posts;
export default postSlice.reducer;   


// transaction = []
// Get data from 