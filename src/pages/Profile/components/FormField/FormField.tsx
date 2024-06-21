import { IProps } from "./types";
import "./style.scss";

export const FormField = ({ fieldName, value }: IProps) => {
  return (
    <div className="form-field__wrapper">
      <p className="form-field__title">{fieldName}</p>
      <div className="form-field">
        <span>{value}</span>
      </div>
    </div>
  );
};
