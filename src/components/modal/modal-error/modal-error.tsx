import { FC } from "react";
import Button from "../../UI/button/button";
import ButtonClose from "../../UI/button-close/button-close";
import ErrorIcon from "../../../icons/error-icon";
import style from "./modal-error.module.css";

type Props = {
  onClose: () => void;
};

const ModalError: FC<Props> = ({ onClose }) => {
  return (
    <div className={style.modal}>
      <div className={style.modal__wrapper}>
        <p className={style.title}>Ошибка</p>
        <ButtonClose onClick={onClose} />
      </div>
      <ErrorIcon />
      <Button onClick={onClose} className={style.button}>
        Закрыть
      </Button>
    </div>
  );
};

export default ModalError;
