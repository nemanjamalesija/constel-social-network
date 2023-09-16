import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  full_name: '',
  picture: '',
  status: 'idle',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload?.username;
      state.full_name = action.payload?.full_name;
      state.picture = action.payload?.picture;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
