import { IAuthUser } from "@/api/auth";

export interface IForm {
  username: string;
  password: string;
}

export interface IProps {
  onSaveUser: (user: IAuthUser) => void;
}
