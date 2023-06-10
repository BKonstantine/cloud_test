import { FC } from "react";
import ButtonLink from "../../UI/button-link/button-link";
import SuccessIcon from "../../../icons/success-icon";
import style from "./modal-success.module.css";

const ModalSuccess: FC = () => {
  return (
    <div className={style.modal}>
      <p className={style.title}>Форма успешно отправлена</p>
      <SuccessIcon />
      <ButtonLink to="/" size="large">
        На главную
      </ButtonLink>
    </div>
  );
};

export default ModalSuccess;
