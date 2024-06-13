import { IUser } from "@/types/user";

export interface IAuthUser extends IUser {
  token: string;
  refreshToken: string;
}

export interface IAuthExpiresMin {
  expiresInMins?: number;
}

export interface IUserAuthBody extends IAuthExpiresMin {
  username: string;
  password: string;
}
