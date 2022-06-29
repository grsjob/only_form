import { IUser } from "../../types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  users: IUser[];
  currentUser: IUser;
}

const initialState: UserState = {
  users: [
    {
      login: "steve.jobs@example.com",
      password: "password",
      isRememberPassword: false,
    },
  ],
  currentUser: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    rememberPassword: (state, { payload: login }: PayloadAction<string>) => {
      state.users = state.users.map((user) => {
        if (user.login === login) {
          user.isRememberPassword = true;
        }
        return user;
      });
    },
    setCurrentUser: (state, { payload: login }: PayloadAction<string>) => {
      state.currentUser = state.users.find((user) => user.login === login);
    },
  },
});

export const { rememberPassword, setCurrentUser } = slice.actions;
export default slice.reducer;
