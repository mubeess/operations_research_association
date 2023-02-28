import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import userDetailSlice from "./user/userDetailSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    userDetail: userDetailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
