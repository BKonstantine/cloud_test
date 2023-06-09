import { FC, MouseEventHandler } from "react";
import BasketIcon from "../../../icons/basket-icon";
import style from "./button-remove.module.css";

type Props = {
  onClick?: MouseEventHandler;
};

const ButtonRemove: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" className={style.button} onClick={onClick}>
      <BasketIcon />
    </button>
  );
};

export default ButtonRemove;
