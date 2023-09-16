import { createSlice } from '@reduxjs/toolkit';
import { PostsType } from '../../types/postType';

type CommentType = {
  comment_id: string;
  created_at: string;
  full_name: string;
  picture: string;
  text: string;
  username: string;
};

const initialState = {
  comments: [] as CommentType[],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action) {
      console.log(action.payload);
      state.comments = action.payload;
    },

    addNewComment(state, action) {
      state.comments.push(action.payload);
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { setComments, addNewComment } = commentsSlice.actions;

export default commentsSlice.reducer;
