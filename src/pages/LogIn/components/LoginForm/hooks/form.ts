import { ChangeEvent, useState } from "react";
import { IForm } from "../types";

export const useForm = () => {
  const [form, setForm] = useState<IForm>({
    username: "",
    password: "",
  });

  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const setUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      username: e.target.value,
    }));
  };

  return {
    form,
    setForm,
    setUsername,
    setPassword,
  };
};
