import { ChangeEvent, useState } from "react";
import { IForm } from "../types";

const formInit = {
  username: "",
  password: "",
};

export const useForm = () => {
  const [form, setForm] = useState<IForm>(formInit);

  const onInputUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      username: e.target.value,
    }));
  };

  const onInputPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const clearForm = () => setForm(formInit);

  return {
    form,
    setForm,
    onInputUsernameChange,
    onInputPasswordChange,
    clearForm,
  };
};
