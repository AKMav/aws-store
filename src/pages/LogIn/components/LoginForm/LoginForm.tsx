import { FormEvent, useMemo, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { FormToasts, useToasts } from "@/components/FormToasts";
import { useForm } from "./hooks/form";
import "./style.scss";

export const LoginForm = () => {
  const { form, setPassword, setUsername } = useForm();
  const { showToast, setShowToast, toastVariant, setToastVariant } =
    useToasts();

  const [tryToSend, setTryToSend] = useState(false);
  const isFormInvalid = useMemo(() => !form.password || !form.username, [form]);

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTryToSend(true);

    if (isFormInvalid) {
      setShowToast(true);
      setToastVariant("danger");
    }

    console.log(form);
  };

  return (
    <div className="login-form__wrapper">
      <h1 className="login-form__title">Log in to Exclusive</h1>
      <p className="login-form__subtitle">Enter your details below</p>
      <Form className="login-form__self" onSubmit={submitHandle}>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            value={form.username}
            isInvalid={tryToSend && !form.username}
            placeholder=""
            onChange={setUsername}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            value={form.password}
            isInvalid={tryToSend && !form.password}
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
        </FloatingLabel>

        <div className="login-form__buttons-row">
          <Button
            className="login-form__button"
            variant="primary"
            type="submit"
            disabled={tryToSend && isFormInvalid}
          >
            Log In
          </Button>
          <Button
            className="login-form__button"
            variant="outline-danger"
            type="button"
          >
            Forget Password
          </Button>
        </div>
      </Form>

      <FormToasts
        setShowToast={setShowToast}
        showToast={showToast}
        toastVariant={toastVariant}
      />
    </div>
  );
};
