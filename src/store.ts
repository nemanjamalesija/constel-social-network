import { userReducer } from './features/user/userSlice';
import { postsReducer } from './features/posts/postsSlice';
import { commentsReducer } from './features/comments/commentsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    userReducer,
    postsReducer,
    commentsReducer,
  },
});
