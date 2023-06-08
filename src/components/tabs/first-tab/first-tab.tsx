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
        name="field-nickname"
        render={({ field }) => <Input label="Nickname" {...field} />}
      />
      <Controller
        control={control}
        name="field-name"
        render={({ field }) => <Input label="Name" {...field} />}
      />
      <Controller
        control={control}
        name="field-sername"
        render={({ field }) => <Input label="Sername" {...field} />}
      />
    </div>
  );
};

export default FirstTab;
