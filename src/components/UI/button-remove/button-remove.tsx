import { FC, HTMLProps } from "react";
import BasketIcon from "../../../icons/basket-icon";
import style from "./button-remove.module.css";



const ButtonRemove: FC<HTMLProps<HTMLButtonElement>> = ({ onClick }) => {
  return (
    <button type="button" className={style.button} onClick={onClick}>
      <BasketIcon />
    </button>
  );
};

export default ButtonRemove;
