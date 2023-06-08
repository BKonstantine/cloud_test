import { FC, useState } from "react";
import style from "./tab-page.module.css";
import Steps from "../../components/UI/steps/steps";
import ButtonLink from "../../components/UI/button-link/button-link";
import Button from "../../components/UI/button/button";

const TabPage: FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={style.tabs}>
      <Steps step={step} />
      <div className={style.tabs__buttons}>
        <ButtonLink to="/" color="secondary">
          Назад
        </ButtonLink>
        <Button>Вперед</Button>
      </div>      
    </div>
  );
};

export default TabPage;
