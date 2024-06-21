import { useMemo } from "react";
import { IUser } from "@/types/user";

export const useGetFullAddress = (user: IUser | null) =>
  useMemo(() => {
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
