import { FC, useMemo } from "react";
import Input from "../../UI/input/input";
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
          <Input label="Nickname" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-name"
        render={({ field }) => (
          <Input label="Name" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-sername"
        render={({ field }) => (
          <Input label="Sername" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-sex"
        render={({ field: { value, onChange } }) => (
          <Select
            placeholder="Не выбрано"
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
