import { FC } from "react";
import Textarea from "../../UI/textarea/textarea";
import style from "./third-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";

const ThirdTab: FC = () => {
  const { control } = useFormContext();

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="field-about"
        render={({ field }) => <Textarea {...field} />}
      />
    </fieldset>
  );
};

export default ThirdTab;
