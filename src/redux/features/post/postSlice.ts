import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "../../../services/post/post.services";
import { RootState } from "../../app/store";

const initialState: IPostState = {
  post: [],
  status: "idle",
  errors: "",
  liked: false,
  postAddedStatus: "idle",
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

export const likePostApi = createAsyncThunk(
  "post/like",
  async (data: string, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).login.token as string;
      const response = await postService.likePost(data, token as string);
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

export const unlikePostApi = createAsyncThunk(
  "post/unlike",
  async (data: string, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).login.token;
      const response = await postService.unlikePost(data, token as string);
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

export const addPostApi = createAsyncThunk(
  "post/create",
  async (data: { description: string; image: string }, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).login.token as string;
      const response = await postService.addPost(data, token as string);
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
  reducers: {
    fetchPostFromLS: (state) => {
      state.post = postService.getPostFromLocalStorage;
    },
    likePost: (state, { payload }) => {
      let postId = payload;
      let mypost = state.post.find((p) => p.id === postId);
      mypost!.likescount = mypost!.likescount + 1;
    },
    unLikePost: (state, { payload }) => {
      let postId = payload;
      let mypost = state.post.find((p) => p.id === postId);
      mypost!.likescount = mypost!.likescount - 1;
    },
    postStateReset: (state) => {
      state.status = "idle";
      state.postAddedStatus = "idle";
      state.errors = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostApi.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(getAllPostApi.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.post = payload?.data?.data;
        postService.updatePostInLS(payload?.data?.data);
      })
      .addCase(getAllPostApi.rejected, (state, { payload }) => {
        state.status = "failed";
        state.errors = payload as string;
      })
      .addCase(addPostApi.pending, (state, { payload }) => {
        state.postAddedStatus = "loading";
      })
      .addCase(addPostApi.fulfilled, (state, { payload }) => {
        state.postAddedStatus = "success";
      })
      .addCase(addPostApi.rejected, (state, { payload }) => {
        state.postAddedStatus = "failed";
        state.errors = payload as string;
      });
    // .addCase(likePostApi.pending, (state, { payload }) => {
    //   state.status = "loading";
    // })
    // .addCase(likePostApi.fulfilled, (state, { payload }) => {
    //   state.status = "success";
    //   state.liked = payload?.status;
    // })
    // .addCase(likePostApi.rejected, (state, { payload }) => {
    //   state.status = "failed";
    //   state.errors = payload;
    // })
    // .addCase(unlikePostApi.pending, (state, { payload }) => {
    //   state.status = "loading";
    // })
    // .addCase(unlikePostApi.fulfilled, (state, { payload }) => {
    //   state.status = "success";
    //   state.liked = payload?.status;
    // })
    // .addCase(unlikePostApi.rejected, (state, { error }) => {
    //   state.status = "failed";
    //   state.errors = error.message;
    // });
  },
});

export const getAllPostState = (state: RootState) => state.posts;
export const { fetchPostFromLS, likePost, unLikePost, postStateReset } =
  postSlice.actions;
export default postSlice.reducer;

// transaction = []
// Get data from
