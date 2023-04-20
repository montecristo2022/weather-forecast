import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
