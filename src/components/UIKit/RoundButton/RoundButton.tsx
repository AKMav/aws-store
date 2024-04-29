import React from "react";
import "./style.scss";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  clickHandle?: () => void;
}

export const RoundButton = ({ children, className, clickHandle }: IProps) => {
  return (
    <button
      className={
        className ? `app-round-button ${className}` : "app-round-button"
      }
      onClick={clickHandle}
    >
      {children}
    </button>
  );
};
