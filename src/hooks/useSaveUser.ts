import { useDispatch } from "react-redux";
import { updateCurrentUser } from "@/store/profile";
import { IFetchedUser } from "@/api/auth";
import { setMultipleCookies } from "@/helpers";
import { ITokens } from "@/types/tokens";

export const useSaveUser = () => {
  const dispatch = useDispatch();

  const saveTokens = ({ token, refreshToken }: ITokens) => {
    setMultipleCookies([
      { key: "token", value: token },
      { key: "refreshToken", value: refreshToken },
    ]);
  };

  const onSuccessfullyAuthorized = (user: IFetchedUser) => {
    const { token, refreshToken, ...payload } = user;
    dispatch(updateCurrentUser(payload));
    saveTokens({ token, refreshToken });
  };

  return { onSuccessfullyAuthorized, saveTokens };
};
