import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import BaseTextarea from "../../base-textarea/base-textarea";
import { checkLength } from "../../../utils/check-length";
import style from "./third-tab.module.css";

const ThirdTab: FC = () => {
  const { control } = useFormContext();

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="field-about"
        render={({ field: { value, name, onBlur, onChange, ref } }) => (
          <BaseTextarea
            value={value}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            counter={checkLength(value)}
            label="About"
          />
        )}
      />
    </fieldset>
  );
};

export default ThirdTab;
