import { IFetchedUser } from "@/api/auth";

export interface IForm {
  username: string;
  password: string;
}

export interface IProps {
  onSaveUser: (user: IFetchedUser) => void;
}
