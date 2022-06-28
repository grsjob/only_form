import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isAuthorized: boolean;
  isLoading: boolean;
}

const initialState: AppState = {
  isAuthorized: false,
  isLoading: false,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.isLoading = true;
    },
    loadingEnd: (state) => {
      state.isLoading = false;
    },
    logIn: (state) => {
      state.isAuthorized = true;
    },
    logOut: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const { loadingStart, loadingEnd, logIn, logOut } = slice.actions;
export default slice.reducer;
