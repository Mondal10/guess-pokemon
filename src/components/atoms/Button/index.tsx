import { TClickButtonElement } from "@/shared/types";
import React from "react";
import styles from "./styles.module.css";

interface IProps {
  label: string;
  clickHandler: (e: TClickButtonElement) => void;
  customClass?: string;
}

function Button(props: IProps) {
  const { label, clickHandler, customClass = "" } = props;
  const { button, buttonHover } = styles;

  const buttonDefaultClass = `${button} ${buttonHover} p-2 border-2 border-black rounded-md`;
  const buttonClass = `${buttonDefaultClass} ${customClass}`;

  return (
    <button className={buttonClass} onClick={clickHandler}>
      {label}
    </button>
  );
}

export default Button;
