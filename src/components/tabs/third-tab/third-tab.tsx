import { FC } from "react";
import Input from "../../UI/input/input";
import style from "./third-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";

const ThirdTab: FC = () => {
  const { control } = useFormContext();

  return (
    <div className={style.tab}>
      <Controller
        control={control}
        name="Firstname2"
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Input
            label="Firstname2"
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
        name="Secondname2"
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Input
            label="Secondname2"
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
        name="Fullname2"
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Input
            label="Fullname2"
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

export default ThirdTab;
