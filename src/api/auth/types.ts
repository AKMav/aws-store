import { IUser } from "@/types/user";
import { ITokens } from "@/types/tokens";

export interface IFetchedUser extends IUser, ITokens {}

export interface IAuthExpiresMin {
  expiresInMins?: number;
}

export interface IRefreshTokenPayload extends IAuthExpiresMin {
  refreshToken: string;
}

export interface IUserAuthBody extends IAuthExpiresMin {
  username: string;
  password: string;
}
