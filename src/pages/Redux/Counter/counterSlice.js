import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  posts: [],
  postFetchStatus: "idle",
  postFetchError: null,
};

export const fetchPosts = createAsyncThunk(`tasks/fetchPosts`, async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if(!res.ok)
  {
    throw new Error(`Request failed with error code ${res.status}`)
  }
  return res.json();
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.postFetchStatus = "loading";
      state.posts = [];
      state.postFetchError = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.postFetchStatus = "error";
      state.posts = [];
      state.postFetchError = action.error.message;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.postFetchStatus = "success";
      state.posts.push(action.payload);
      state.postFetchError = null;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
