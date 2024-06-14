import { useDispatch } from "react-redux";
import { updateCurrentUser } from "@/store/profile";
import { IAuthUser } from "@/api/auth";
import { setMultipleCookies } from "@/helpers";

export const useSaveUser = () => {
  const dispatch = useDispatch();

  const saveTokens = ({
    token,
    refreshToken,
  }: {
    token: string;
    refreshToken: string;
  }) => {
    setMultipleCookies([
      { key: "token", value: token },
      { key: "refreshToken", value: refreshToken },
    ]);
  };

  const onSuccessfullyAuthorized = (user: IAuthUser) => {
    const { token, refreshToken, ...payload } = user;
    dispatch(updateCurrentUser(payload));
    saveTokens({ token, refreshToken });
  };

  return { onSuccessfullyAuthorized };
};
