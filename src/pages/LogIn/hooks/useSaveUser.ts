import { useDispatch } from "react-redux";
import { updateCurrentUser } from "@/store/profile";
import { IAuthUser } from "@/api/auth";

export const useSaveUser = () => {
  const dispatch = useDispatch();

  const saveTokens = ({
    token,
    refreshToken,
  }: {
    token: string;
    refreshToken: string;
  }) => {
    console.log({ token, refreshToken });
  };

  const onSuccessfullyAuthorized = (user: IAuthUser) => {
    const { token, refreshToken, ...payload } = user;
    dispatch(updateCurrentUser(payload));
    saveTokens({ token, refreshToken });
  };

  return { onSuccessfullyAuthorized };
};
