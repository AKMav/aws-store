import { useDispatch } from "react-redux";
import { updateCurrentUser } from "@/store/profile";
import { IFetchedUser } from "@/api/auth";
import { saveTokens } from "@/helpers";

export const useSuccessfulAuth = () => {
  const dispatch = useDispatch();

  const saveFetchedUser = (user: IFetchedUser) => {
    const { token, refreshToken, ...payload } = user;
    dispatch(updateCurrentUser(payload));
    saveTokens({ token, refreshToken });
  };

  return { saveFetchedUser };
};
