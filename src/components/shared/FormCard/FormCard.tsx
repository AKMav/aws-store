import "./style.scss";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  className?: string;
}

export const FormCard = ({ children, className }: IProps) => {
  return (
    <div className={className ? `form-card ${className}` : "form-card"}>
      {children}
    </div>
  );
};
