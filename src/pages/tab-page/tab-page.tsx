import { FC } from "react";
import style from "./tab-page.module.css";
import Button from "../../components/UI/button/button";

const TabPage: FC = () => {
  return (
    <div>
      <div className={style.buttons}>
        <Button color="secondary">Назад</Button>
        <Button>Вперед</Button>
      </div>
    </div>
  );
};

export default TabPage;
