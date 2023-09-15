import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCurrentUser from '../../api/getCurrentUser';

const initialState = {
  username: '',
  fullName: '',
  picture: '',
  status: 'idle',
  error: '',
};

export const getUser = createAsyncThunk('', async function () {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  const {
    account: { username, full_name, picture },
  } = currentUser;

  return { username, full_name, picture };
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.username = action.payload?.username;
        state.fullName = action.payload?.full_name;
        state.picture = action.payload?.picture;
        state.status = 'idle';
      })
      .addCase(getUser.rejected, (state) => {
        state.status = 'error';

        state.error = 'Could not get the user';
      }),
});

export const userReducer = userSlice.reducer;
export const { updateName } = userSlice.actions;

export default userSlice.reducer;
