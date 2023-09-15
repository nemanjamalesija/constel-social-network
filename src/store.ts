import { userReducer } from './features/user/userSlice';
import { postsReducer } from './features/posts/postsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    userReducer,
    postsReducer,
  },
});
