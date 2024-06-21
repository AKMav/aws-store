import { IUser } from "@/types/user";
import { useMemo } from "react";

interface IProps {
  user: IUser | null;
}

export const ProfileFullInfo = ({ user }: IProps) => {
  const fullAddress = useMemo(() => {
    let result = "";
    const city = user?.address?.city;
    const state = user?.address?.state;
    const country = user?.address?.country;
    const placeAddress = user?.address?.address;
    result += city ? city : "";
    result += state ? ` ${state}` : "";
    result += placeAddress ? `, ${placeAddress}` : "";
    result += country ? `, ${country}` : "";
    return result || null;
  }, [user]);

  return <div>{fullAddress}</div>;
};
