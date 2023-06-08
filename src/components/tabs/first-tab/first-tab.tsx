import { FC } from "react";
import Input from "../../UI/input/input";
import style from "./first-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";

const FirstTab: FC = () => {
  const { control } = useFormContext();

  return (
    <div className={style.tab}>
      <Controller
        control={control}
        name="Firstname1"
        render={({ field }) => <Input label="Firstname1" {...field} />}
      />
      <Controller
        control={control}
        name="Secondname1"
        render={({ field }) => <Input label="Secondname1" {...field} />}
      />
      <Controller
        control={control}
        name="Fullname1"
        render={({ field }) => <Input label="Fullname1" {...field} />}
      />
    </div>
  );
};

export default FirstTab;
