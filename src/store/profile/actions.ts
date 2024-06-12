import { PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./types";
import { IUser } from "@/types/user";

const updateUser = <T extends IUser>(
  state: IUserState,
  action: PayloadAction<T>
) => {
  state.user = action.payload;
};

export { updateUser };
