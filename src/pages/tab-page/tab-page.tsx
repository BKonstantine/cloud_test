import { FC, useState, MouseEvent, useCallback } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Steps from "../../components/UI/steps/steps";
import ButtonLink from "../../components/UI/button-link/button-link";
import Button from "../../components/UI/button/button";
import FirstTab from "../../components/tabs/first-tab/first-tab";
import SecondTab from "../../components/tabs/second-tab/second-tab";
import ThirdTab from "../../components/tabs/third-tab/third-tab";
import ModalOverlay from "../../components/modal-overlay/modal-overlay";
import Modal from "../../components/modal/modal";
import style from "./tab-page.module.css";
import { sendRequest } from "../../api/api";
import { FormData } from "../../api/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/schema";

const TabPage: FC = () => {
  const [step, setStep] = useState(2);
  const [result, setResult] = useState("");
  const tabs = [<FirstTab />, <SecondTab />, <ThirdTab />];

  const methods = useForm<FormData>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const formState = methods.formState;
  const isValid = formState.isValid;
  const trigger = methods.trigger;

  const firstTabFileds = ["nickname", "name", "sername", "sex"];
  const secondTabFields = ["advantages", "checkbox", "radio"];
  const thirdTabFileds = ["about"];
  const dirtyFields = Object.keys(formState.dirtyFields);
  const errorFileds = Object.keys(formState.errors);

  const checkValidTab = () => {
    return dirtyFields.some((field) => {
      return errorFileds.some((error) => error === field);
    });
  };

  const onSubmit = useCallback(
    methods.handleSubmit((data) => {
      console.log(data);
      sendRequest(data)
        .then((res) => setResult(res.status))
        .catch(() => setResult("error"));
    }),
    [methods]
  );
  
  console.log(formState.errors);

  const onClick = useCallback(
    (step: number) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      trigger(secondTabFields)
      /* setStep(step); */
    },
    []
  );

  const onClose = useCallback(() => {
    setResult("");
  }, []);

  return (
    <>
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
                <Button onClick={onClick(step - 1)} color="secondary">
                  {step === 2 ? "Back" : "Назад"}
                </Button>
              )}
              {step === 3 ? (
                <Button
                  type="submit"
                  buttonSize="large" /*  disabled={!isValid} */
                >
                  Отправить
                </Button>
              ) : (
                <Button onClick={onClick(step + 1)}>Вперед</Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
      {false && (
        <ModalOverlay>
          <Modal result={result} onClose={onClose} />
        </ModalOverlay>
      )}
    </>
  );
};

export default TabPage;
