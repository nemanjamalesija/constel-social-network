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

    addNewPost(state, action) {
      state.posts.push(action.payload);
    },

    postLike(state, action) {
      const id = action.payload;

      const currentPost = state.posts.find((p) => p.post_id === id);

      if (!currentPost) return;

      currentPost.likes++;
      currentPost.liked = true;
    },

    postUnlike(state, action) {
      const id = action.payload;

      const currentPost = state.posts.find((p) => p.post_id === id);

      if (!currentPost) return;

      currentPost.likes--;
      currentPost.liked = false;
    },

    removePost(state, action) {
      const id = action.payload;

      const indexToUpdate = state.posts.findIndex((p) => p.post_id == id);

      if (indexToUpdate !== -1) {
        // Remove the old object
        state.posts.splice(indexToUpdate, 1);
      }
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { setPosts, addNewPost, postLike, postUnlike, removePost } =
  postsSlice.actions;

export default postsSlice.reducer;
