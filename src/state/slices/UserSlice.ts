import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: string;
}

const initialState: UserState = {
  currentUser: "",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload: login }: PayloadAction<string>) => {
      state.currentUser = login;
    },
  },
});

export const { setCurrentUser } = slice.actions;
export default slice.reducer;
