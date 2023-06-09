import { FC, useMemo } from "react";
import BaseInput from "../../base-input/base-input";
import Select from "../../UI/select/select";
import style from "./first-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";

const FirstTab: FC = () => {
  const { control } = useFormContext();

  const options = useMemo(
    () => [
      { value: "field-sex-option-man", label: "man" },
      { value: "field-sex-option-woman", label: "woman" },
    ],
    []
  );

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="field-nickname"
        render={({ field }) => (
          <BaseInput label="Nickname" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-name"
        render={({ field }) => (
          <BaseInput label="Name" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-sername"
        render={({ field }) => (
          <BaseInput label="Sername" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-sex"
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
