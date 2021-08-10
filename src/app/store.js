import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "../features/calcSlice";

export const store = configureStore({
  reducer: {
    calc: calcSlice,
  },
});
