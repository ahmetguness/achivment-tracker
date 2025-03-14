import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Slices/AppSlice";
import UserSlice from "./Slices/UserSlice";

const store = configureStore({
  reducer: {
    app: AppSlice,
    user: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
