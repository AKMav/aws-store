import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser } from "@/store/profile";
import { IFetchedUser } from "@/api/auth";
import { saveTokens } from "@/helpers";
import { Routes } from "@/routes";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccessfulLogin = (user: IFetchedUser) => {
    const { token, refreshToken, ...payload } = user;
    dispatch(updateCurrentUser(payload));
    saveTokens({ token, refreshToken });
    navigate(Routes.Home);
  };

  return { onSuccessfulLogin };
};
