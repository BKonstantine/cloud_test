import { ButtonHTMLAttributes, FC } from "react";
import style from "./button-close.module.css";

const ButtonClose: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...rest
}) => {
  return <button type="button" className={style.button} {...rest}></button>;
};

export default ButtonClose;
