import { createSlice } from '@reduxjs/toolkit';
import { CommentType } from '../../types/CommentType';

const initialState = {
  comments: [] as CommentType[],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
    },

    addNewComment(state, action) {
      state.comments.push(action.payload);
    },

    removeComment(state, action) {
      const id = action.payload;

      const indexToUpdate = state.comments.findIndex((c) => c.comment_id == id);

      if (indexToUpdate !== -1) {
        // Remove the old object
        state.comments.splice(indexToUpdate, 1);
      }
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { setComments, addNewComment, removeComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
