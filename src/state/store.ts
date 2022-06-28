import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/AppSlice";
import user from "./slices/UserSlice";

export const store = configureStore({
  reducer: { app, user },
});

export type State = ReturnType<typeof store.getState>;
