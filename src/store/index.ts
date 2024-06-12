import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import buyerCartReducer from "./buyerCart";
import wishListReducer from "./wishlist";
import profileReducer from "./profile";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    buyerCart: buyerCartReducer,
    wishlist: wishListReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
