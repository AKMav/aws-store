import { httpClient } from "@/services/axios";
import { IAuthUser, IUserAuthBody, IAuthExpiresMin } from "./types";

export const authLogin = (payload: IUserAuthBody) => {
  return httpClient.post<IAuthUser>("/auth/login", payload);
};

export const authRefresh = (payload: IAuthExpiresMin) => {
  return httpClient.post<IAuthUser>("/auth/refresh", payload);
};
