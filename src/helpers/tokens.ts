import { ITokens } from "@/types/tokens";
import { setMultipleCookies } from "./cookies";

export const saveTokens = ({ token, refreshToken }: ITokens) => {
  setMultipleCookies([
    { key: "token", value: token },
    { key: "refreshToken", value: refreshToken },
  ]);
};
