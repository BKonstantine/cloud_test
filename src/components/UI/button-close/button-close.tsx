import { ButtonHTMLAttributes, FC } from "react";
import style from "./button-close.module.css";

const ButtonClose: FC<ButtonHTMLAttributes<HTMLButtonElement>> = () => {
  return <button type="button" className={style.button}></button>;
};

export default ButtonClose;
