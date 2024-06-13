import { FormEvent, useMemo, useState } from "react";
import { AxiosError } from "axios";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { authLogin, IUserAuthBody, IAuthUser } from "@/api/auth";
import { useForm } from "./hooks/form";
import { IProps } from "./types";
import "./style.scss";

export const LoginForm = ({ onSaveUser }: IProps) => {
  const { form, onInputPasswordChange, onInputUsernameChange, clearForm } =
    useForm();

  const [tryToSend, setTryToSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const isFormInvalid = useMemo(() => !form.password || !form.username, [form]);

  const sendAuth = async (body: IUserAuthBody) => {
    try {
      setLoading(true);
      const response = await authLogin(body);
      const user = response.data;
      successfulAuthorizeHandle(user);
    } catch (e) {
      const error = e as AxiosError;

      if (error.response?.status === 401) {
        console.log("errors.unauthorized");
      } else {
        const data = error.response?.data as { message: string };
        toast.error(data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTryToSend(true);

    if (isFormInvalid) {
      toast.error("Form is invalid. Need to fill all required fields");
    } else {
      const body: IUserAuthBody = {
        ...form,
        expiresInMins: 30,
      };
      sendAuth(body);
    }
  };

  const successfulAuthorizeHandle = (user: IAuthUser) => {
    onSaveUser(user);
    clearForm();
    setTryToSend(false);
    toast.success("Successful authorized");
  };

  return (
    <div className="login-form__wrapper">
      <h1 className="login-form__title">Log in to Exclusive</h1>
      <p className="login-form__subtitle">Enter your details below</p>
      <Form className="login-form__self" onSubmit={submitHandle}>
        <FloatingLabel label="Username" className="mb-3">
          <Form.Control
            value={form.username}
            isInvalid={tryToSend && !form.username}
            disabled={loading}
            placeholder=""
            onChange={onInputUsernameChange}
          />
        </FloatingLabel>
        <FloatingLabel label="Password">
          <Form.Control
            value={form.password}
            disabled={loading}
            isInvalid={tryToSend && !form.password}
            type="password"
            placeholder=""
            onChange={onInputPasswordChange}
          />
        </FloatingLabel>

        <div className="login-form__buttons-row">
          <Button
            className="login-form__button"
            variant="primary"
            type="submit"
            disabled={(tryToSend && isFormInvalid) || loading}
          >
            {loading ? "Loading..." : "Log In"}
          </Button>
          <Button
            className="login-form__button"
            variant="outline-danger"
            type="button"
            onClick={() => toast.info("User forget password logic")}
          >
            Forget Password
          </Button>
        </div>
      </Form>
    </div>
  );
};
