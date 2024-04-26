import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import buyerCartReducer from "./buyerCart";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    buyerCart: buyerCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
