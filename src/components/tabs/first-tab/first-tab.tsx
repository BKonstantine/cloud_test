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
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Input
            label="Firstname1"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            ref={ref}
          />
        )}
      />
      <Controller
        control={control}
        name="Secondname1"
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Input
            label="Secondname1"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            ref={ref}
          />
        )}
      />
      <Controller
        control={control}
        name="Fullname1"
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Input
            label="Fullname1"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            ref={ref}
          />
        )}
      />
    </div>
  );
};

export default FirstTab;
