import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./types";
import { updateUser } from "./actions";
import { SLICE_NAME } from "./constants";

const initialState: IUserState = {
  user: null,
};

const categoriesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updateUser,
  },
});

export default categoriesSlice.reducer;

export const { updateUser: updateCurrentUser } = categoriesSlice.actions;
