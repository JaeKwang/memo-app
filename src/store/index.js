import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./slices/memoSlice";

export const store = configureStore({
  reducer: {
    memos: memoReducer,
  },
});

export default store;
