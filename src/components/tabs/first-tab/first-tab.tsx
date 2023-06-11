import { FC, useMemo, useEffect } from "react";
import BaseInput from "../../base-input/base-input";
import Select from "../../UI/select/select";
import style from "./first-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";

const FirstTab: FC = () => {
  const { control, formState, trigger } = useFormContext();

  const options = useMemo(
    () => [
      { value: "man", label: "man" },
      { value: "woman", label: "woman" },
    ],
    []
  );

  useEffect(() => {
    const arrayFields = Object.keys(formState.dirtyFields);
    trigger(arrayFields);
  }, [formState.touchedFields]);

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="nickname"
        render={({ field }) => (
          <BaseInput label="Nickname" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <BaseInput label="Name" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="sername"
        render={({ field }) => (
          <BaseInput label="Sername" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="sex"
        render={({ field: { value, onChange } }) => (
          <Select
            placeholder="Не выбрано"
            label="Sex"
            value={value}
            onChange={onChange}
            options={options}
          />
        )}
      />
    </fieldset>
  );
};

export default FirstTab;
