import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  accessToken: null,
  userId: null,
  discount: 0 // Initial discount value
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
    },
    logoutUser: (state) => {
      state.username = null;
      state.accessToken = null;
      state.userId = undefined;
      state.discount = 0; // Reset the discount value on logout
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    deleteUser: (state) => {
      state.username = null;
      state.accessToken = null;
      state.userId = null;
      state.discount = 0;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    }
  }
});

export const { loginUser, logoutUser, setDiscount, deleteUser, setUserId } = authSlice.actions;

/*
The reason why the logoutUser and deleteUser reducers only include the state parameter
and not the action parameter is because these actions do not require
any payload or additional information from the action itself.

In the case of the logoutUser action, it simply resets the authentication-related state
in the Redux store to its initial values.
There is no need for an action parameter because the logic of the action is solely
 based on updating the state based on the action type.

Similarly, for the deleteUser action, it is not dependent on any payload or additional information.
Its purpose is to reset the user-related state in the Redux store when the user is deleted.
Again, there is no need for an action parameter because the logic
of the action is self-contained within the reducer.

In general, if an action does not require any payload or additional information,
you can omit the action parameter in the reducer function.
The reducer function will still receive the state parameter,
which allows you to update the state as needed.
*/