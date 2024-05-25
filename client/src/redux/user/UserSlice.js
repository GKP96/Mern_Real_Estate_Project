import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userDeleteStart: (state) => {
      state.loading = true;
    },
    userDeleteSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    userDeleteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userSignoutStart: (state) => {
      state.loading = true;
    },
    userSignoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = null;
    },
    userSignoutFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    uploadFileStart: (state) => {
      state.loading = true;
    },
    uploadFileSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = { ...state.currentUser, avatar: action.payload };
    },
    uploadFileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  signInFailure,
  signInSuccess,
  signInStart,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  userDeleteSuccess,
  userDeleteFailure,
  userDeleteStart,
  userSignoutStart,
  userSignoutSuccess,
  userSignoutFailure,
  uploadFileStart,
  uploadFileSuccess,
  uploadFileFailure,
} = userSlice.actions;

export default userSlice.reducer;
