import { Routes } from "@/routes";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export const useHandleClick = (isAuthorized: boolean) => {
  const navigate = useNavigate();

  return (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    const href = target.getAttribute("href");
    if (isAuthorized && href === `/${Routes.Login}`) {
      event.preventDefault();
      navigate(Routes.Home);
    }
  };
};
