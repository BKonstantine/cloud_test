import { FC, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
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

  const methods = useForm();

  console.log(methods.getValues());

  // TODO: Исправить типизацию
  const onSubmit = (data: any) => console.log(data);

  const onClick = (step: number) => {
    setStep(step);
  };

  return (
    <div className={style.tabs}>
      <Steps step={step} className={style.tabs__steps} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{tabs[step - 1]}</form>
      </FormProvider>
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
    </div>
  );
};

export default TabPage;
