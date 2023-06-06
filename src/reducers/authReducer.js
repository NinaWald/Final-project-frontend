import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  accessToken: null,
  discount: 0 // Initial discount value
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
    },
    logoutUser: (state) => {
      state.username = null;
      state.accessToken = null;
      state.discount = 0; // Reset the discount value on logout
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    }
  }
});

export const { loginUser, logoutUser, setDiscount } = authSlice.actions;

