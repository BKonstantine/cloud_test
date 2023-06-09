import { FC } from "react";
import Input from "../../UI/input/input";
import style from "./second-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";

const SecondTab: FC = () => {
  const { control } = useFormContext();

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="Firstname2"
        render={({ field }) => <Input label="Firstname2" {...field} />}
      />
      <Controller
        control={control}
        name="Secondname2"
        render={({ field }) => <Input label="Secondname2" {...field} />}
      />
      <Controller
        control={control}
        name="Fullname2"
        render={({ field }) => <Input label="Fullname2" {...field} />}
      />
    </fieldset>
  );
};

export default SecondTab;
