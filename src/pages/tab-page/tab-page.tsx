import { FC, useState } from "react";
import Steps from "../../components/UI/steps/steps";
import ButtonLink from "../../components/UI/button-link/button-link";
import Button from "../../components/UI/button/button";
import FirstTab from "../../components/tabs/first-tab/first-tab";
import SecondTab from "../../components/tabs/second-tab/second-tab";
import ThirdTab from "../../components/tabs/third-tab/third-tab";
import style from "./tab-page.module.css";

const TabPage: FC = () => {
  const [step, setStep] = useState(1);
  const tabs = [<FirstTab />, <SecondTab />, <ThirdTab />];

  return (
    <div className={style.tabs}>
      <Steps step={step} className={style.tabs__steps}/>
      {tabs[step]}
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
