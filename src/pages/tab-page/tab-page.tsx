import { FC, useState } from "react";
import style from "./tab-page.module.css";
import ButtonLink from "../../components/UI/button-link/button-link";
import Button from "../../components/UI/button/button";
import Steps from "../../components/UI/steps/steps";

const TabPage: FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      <div className={style.buttons}>
        <Steps step={step} />
        <ButtonLink to="/" color="secondary">
          Назад
        </ButtonLink>
        <Button>Вперед</Button>
      </div>
    </div>
  );
};

export default TabPage;
