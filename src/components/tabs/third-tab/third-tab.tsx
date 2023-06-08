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
        name="Firstname3"
        render={({ field }) => <Input label="Firstname3" {...field} />}
      />
      <Controller
        control={control}
        name="Secondname3"
        render={({ field }) => <Input label="Secondname3" {...field} />}
      />
      <Controller
        control={control}
        name="Fullname3"
        render={({ field }) => <Input label="Fullname3" {...field} />}
      />
    </div>
  );
};

export default ThirdTab;
