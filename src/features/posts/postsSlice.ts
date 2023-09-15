import { createSlice } from '@reduxjs/toolkit';
import { PostsType } from '../../types/postType';

const initialState = {
  posts: [] as PostsType,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
