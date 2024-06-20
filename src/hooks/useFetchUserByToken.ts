import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "@/api/auth";
import { updateCurrentUser } from "@/store/profile";
import { IUser } from "@/types/user";

export const useFetchUserByToken = () => {
  const dispatch = useDispatch();

  const getUserByToken = async () => {
    try {
      const { data } = await fetchCurrentUser();
      const user: IUser = {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        image: data.image,
        address: data.address,
      };
      dispatch(updateCurrentUser(user));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserByToken();
  }, []);
};
