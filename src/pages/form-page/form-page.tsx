import { FC } from "react";
import style from "./form-page.module.css";
import Button from "../../components/UI/button/button";

const FormPage: FC = () => {
  return (
    <div>
      <div className={style.buttons}>
        <Button color="secondary">Назад</Button>
        <Button>Вперед</Button>
      </div>
    </div>
  );
};

export default FormPage;
