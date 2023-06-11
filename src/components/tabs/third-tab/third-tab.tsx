import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import BaseTextarea from "../../base-textarea/base-textarea";
import { checkLength } from "../../../utils/check-length";
import { getError } from "../../../utils/get-error";
import style from "./third-tab.module.css";

const ThirdTab: FC = () => {
  const { control, formState } = useFormContext();

  const errors = formState.errors;

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="about"
        render={({ field }) => (
          <BaseTextarea
            {...field}
            counter={checkLength(field.value)}
            label="About"
            error={getError(errors["about"]?.message)}
          />
        )}
      />
    </fieldset>
  );
};

export default ThirdTab;
