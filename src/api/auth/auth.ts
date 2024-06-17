import { httpClient } from "@/services/axios";
import { IFetchedUser, IUserAuthBody, IRefreshTokenPayload } from "./types";
import { ITokens } from "@/types/tokens";

export const authLogin = (payload: IUserAuthBody) => {
  return httpClient.post<IFetchedUser>("/auth/login", payload);
};

export const authRefresh = (payload: IRefreshTokenPayload) => {
  return httpClient.post<ITokens>("/auth/refresh", payload);
};

export const fetchCurrentUser = <T extends IFetchedUser>() => {
  return httpClient.get<T>("/auth/me");
};
