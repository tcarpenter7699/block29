import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import puppySlice from "./Slices/puppySlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    puppy: puppySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;