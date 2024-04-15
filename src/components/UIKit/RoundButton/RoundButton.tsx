import React from "react";
import "./style.scss";

interface IProps {
  children?: React.ReactNode;
  clickHandle?: () => void;
}

export const RoundButton = ({ children, clickHandle }: IProps) => {
  return (
    <button className="app-round-button" onClick={clickHandle}>
      {children}
    </button>
  );
};
