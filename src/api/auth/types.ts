export interface IAuthUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface IErrorData {
  message: string;
}

export interface IUserAuthBody extends IAuthExpiresMin {
  username: string;
  password: string;
}

export interface IAuthExpiresMin {
  expiresInMins?: number;
}
