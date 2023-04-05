import { configureStore } from "@reduxjs/toolkit";

import slideSlice from "./slideSlice";

export const store = configureStore({
  reducer: {
    slide: slideSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
