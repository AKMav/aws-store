import { ITokens } from "@/types/tokens";

interface IValueForCookie {
  [key: string]: string;
}

export const getCookies = () => {
  return document.cookie.split("; ").reduce((acc: IValueForCookie, item) => {
    const [name, value] = item.split("=");
    if (name && value) {
      acc[name] = value;
    }
    return acc;
  }, {});
};

export const setCookie = ({ key, value }: IValueForCookie) => {
  document.cookie = `${key}=${value};secure;samesite=strict;`;
};

export const setMultipleCookies = (payload: IValueForCookie[]) => {
  payload.forEach((obj) => setCookie(obj));
};

export const saveTokens = ({ token, refreshToken }: ITokens) => {
  setMultipleCookies([
    { key: "token", value: token },
    { key: "refreshToken", value: refreshToken },
  ]);
};
