import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { FormCard } from "@/components/UIKit";
import { Button, Form } from "react-bootstrap";
import "./style.scss";

interface IProps {
  onSend: () => void;
  onError: () => void;
}

export const MessageForm = ({ onSend, onError }: IProps) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [tryToSend, setTryToSend] = useState(false);

  const formInvalid = useMemo(
    () => name.length === 0 || mail.length === 0 || phone.length === 0,
    [name, mail, phone]
  );

  const clearForm = () => {
    setName("");
    setMail("");
    setPhone("");
    setMessage("");
    setTryToSend(false);
  };

  const changeName = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const changeMail = (event: ChangeEvent<HTMLInputElement>) =>
    setMail(event.target.value);
  const changePhone = (event: ChangeEvent<HTMLInputElement>) =>
    setPhone(event.target.value);
  const changeMessage = (event: ChangeEvent<HTMLInputElement>) =>
    setMessage(event.target.value);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTryToSend(true);

    if (formInvalid) {
      onError();
    } else {
      onSend();
      clearForm();
    }
  };

  return (
    <FormCard className="message-form__card">
      <Form onSubmit={submitForm} className="message-form" id="message-form">
        <div className="message-form__row">
          <Form.Control
            value={name}
            maxLength={100}
            placeholder="Your Name"
            onChange={changeName}
            isInvalid={name.length === 0 && tryToSend}
          />
          <Form.Control
            value={mail}
            type="email"
            maxLength={100}
            placeholder="Your Email"
            onChange={changeMail}
            isInvalid={mail.length === 0 && tryToSend}
          />
          <Form.Control
            value={phone}
            placeholder="Your Phone"
            onChange={changePhone}
            isInvalid={phone.length === 0 && tryToSend}
          />
        </div>
        <div className="message-form__row">
          <Form.Control
            value={message}
            onChange={changeMessage}
            maxLength={500}
            className="message-form__textarea"
            as="textarea"
            rows={6}
          />
        </div>
        <div className="message-form__row">
          <Button
            className="message-form__button"
            type="submit"
            variant="danger"
            disabled={formInvalid && tryToSend}
          >
            Send Massage
          </Button>
        </div>
      </Form>
    </FormCard>
  );
};
