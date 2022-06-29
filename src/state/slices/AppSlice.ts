import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isAuthorized: boolean;
}

const initialState: AppState = {
  isAuthorized: false,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuthorized = true;
    },
    logOut: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const { logIn, logOut } = slice.actions;
export default slice.reducer;
