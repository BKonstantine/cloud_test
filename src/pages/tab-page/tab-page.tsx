import { FC, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Steps from "../../components/UI/steps/steps";
import ButtonLink from "../../components/UI/button-link/button-link";
import Button from "../../components/UI/button/button";
import FirstTab from "../../components/tabs/first-tab/first-tab";
import SecondTab from "../../components/tabs/second-tab/second-tab";
import ThirdTab from "../../components/tabs/third-tab/third-tab";
import style from "./tab-page.module.css";

interface FormData {
  [fieldName: string]: string;
}

const TabPage: FC = () => {
  const [step, setStep] = useState(3);
  const tabs = [<FirstTab />, <SecondTab />, <ThirdTab />];

  const methods = useForm<FormData>();

  const onSubmit = methods.handleSubmit((data) => console.log(data));
  const onClick = (step: number) => {
    setStep(step);
  };  

  return (
    <div className={style.tabs}>
      <Steps step={step} className={style.tabs__steps} />
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          {tabs[step - 1]}
          <div className={style.tabs__buttons}>
            {step === 1 ? (
              <ButtonLink to="/" color="secondary">
                Назад
              </ButtonLink>
            ) : (
              <Button onClick={() => onClick(step - 1)} color="secondary">
                {step === 2 ? "Back" : "Назад"}
              </Button>
            )}
            {step === 3 ? (
              <Button type="submit" buttonSize="large">
                Отправить
              </Button>
            ) : (
              <Button onClick={() => onClick(step + 1)}>Вперед</Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default TabPage;
