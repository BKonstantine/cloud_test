import { FC, useEffect, useMemo } from "react";
import BaseInput from "../../base-input/base-input";
import Select from "../../UI/select/select";
import style from "./first-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";
import { getError } from "../../../utils/get-error";

const FirstTab: FC = () => {
  const { control, formState } = useFormContext();

  const options = useMemo(
    () => [
      { value: "man", label: "man" },
      { value: "woman", label: "woman" },
    ],
    []
  );

  const errors = formState.errors;

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="nickname"
        render={({ field }) => (
          <BaseInput
            label="Nickname"
            error={getError(errors["nickname"]?.message)}
            placeholder="Placeholder"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <BaseInput
            label="Name"
            error={getError(errors["name"]?.message)}
            placeholder="Placeholder"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="sername"
        render={({ field }) => (
          <BaseInput
            label="Sername"
            error={getError(errors["sername"]?.message)}
            placeholder="Placeholder"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="sex"
        render={({ field: { value, onChange } }) => (
          <Select
            placeholder="Не выбрано"
            label="Sex"
            error={getError(errors["sex"]?.message)}
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
