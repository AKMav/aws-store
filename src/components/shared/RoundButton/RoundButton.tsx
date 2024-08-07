import { ReactNode } from "react";
import "./style.scss";

interface IProps {
  className?: string | null;
  children?: ReactNode;
  handleClick?: () => void;
}

export const RoundButton = ({ children, className, handleClick }: IProps) => {
  return (
    <button
      className={
        className ? `app-round-button ${className}` : "app-round-button"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
