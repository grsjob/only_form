import { IUser } from "../../types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  users: IUser[];
}

const initialState: UserState = {
  users: [
    {
      login: "steve.jobs@example.com",
      password: "password",
      isRememberPassword: true,
    },
  ],
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
  },
});

export const { rememberPassword } = slice.actions;
export default slice.reducer;
