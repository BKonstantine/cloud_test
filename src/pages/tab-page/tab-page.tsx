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
  const [tab, setTab] = useState(1);
  const [result, setResult] = useState("");
  const tabs = [<FirstTab />, <SecondTab />, <ThirdTab />];

  const methods = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const formState = methods.formState;
  const isValid = formState.isValid;
  const trigger = methods.trigger;
  const firstTabFileds = ["nickname", "name", "sername", "sex"];
  const secondTabFields = ["advantages"];
  const errorFields = Object.keys(formState.errors);
  const dirtyFields = Object.keys(formState.dirtyFields);

  const checkValidTab = (array: string[]) => {
    return array.every((item) => {
      return (
        !errorFields.some((err) => err === item) &&
        dirtyFields.some((field) => field === item)
      );
    });
  };

  console.log(checkValidTab(secondTabFields));

  const onSubmit = useCallback(
    methods.handleSubmit((data) => {
      console.log(data);
      sendRequest(data)
        .then((res) => setResult(res.status))
        .catch(() => setResult("error"));
    }),
    [methods]
  );

  const checkFirstTab = (currentTab: number, step: number) => {
    if (currentTab === 1 && checkValidTab(firstTabFileds)) {
      setTab(step);
    } else {
      trigger(firstTabFileds);
    }
  };

  const checkSecondTab = (currentTab: number, step: number) => {
    if (currentTab === 2 && checkValidTab(secondTabFields)) {
      setTab(step);
    } else {
      trigger(secondTabFields);
    }
  };

  const onClickWithValid = useCallback(
    (step: number) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (tab === 1) {
        checkFirstTab(tab, step);
      } else {
        checkSecondTab(tab, step);
      }      
    },
    [dirtyFields, errorFields, tab]
  );

  const onClick = useCallback(
    (step: number) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setTab(step);
    },
    []
  );

  const onClose = useCallback(() => {
    setResult("");
  }, []);

  return (
    <>
      <div className={style.tabs}>
        <Steps step={tab} className={style.tabs__steps} />
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            {tabs[tab - 1]}
            <div className={style.tabs__buttons}>
              {tab === 1 ? (
                <ButtonLink to="/" color="secondary">
                  Назад
                </ButtonLink>
              ) : (
                <Button onClick={onClick(tab - 1)} color="secondary">
                  {tab === 2 ? "Back" : "Назад"}
                </Button>
              )}
              {tab === 3 ? (
                <Button type="submit" buttonSize="large" disabled={!isValid}>
                  Отправить
                </Button>
              ) : (
                <Button onClick={onClickWithValid(tab + 1)}>Вперед</Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
      {result && (
        <ModalOverlay>
          <Modal result={result} onClose={onClose} />
        </ModalOverlay>
      )}
    </>
  );
};

export default TabPage;
