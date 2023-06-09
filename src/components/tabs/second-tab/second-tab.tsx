import { FC } from "react";
import Checkbox from "../../UI/checkbox/checkbox";
import style from "./second-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";

const SecondTab: FC = () => {
  const { control } = useFormContext();

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="field-checkbox-group-option-1"
        render={({ field }) => <Checkbox {...field} />}
      />      
    </fieldset>
  );
};

export default SecondTab;
