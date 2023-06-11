import { FC } from "react";
import { nanoid } from "nanoid";
import { useFormContext, Controller } from "react-hook-form";
import InputLabel from "../UI/input-label/input-label";
import Radio from "../UI/radio/radio";
import style from "./radio-group.module.css";

type Props = {
  label: string;
  array: number[];
  name: string
};

const RadioGroup: FC<Props> = ({ label, array, name }) => {
  const { control } = useFormContext();   

  return (
    <div className={style.container}>
      <InputLabel label={label} />
      <ul className={style.list}>
        {array.map((item, index) => (
          <li className={style.item} key={nanoid()}>
            <Controller
              render={({ field: { onChange, value, ...rest } }) => (
                <Radio
                  checked={value === index + 1}
                  id={String(index)}
                  onChange={(e) => {
                    onChange(e.target.checked ? Number(e.target.value) : null);
                  }}
                  label={String(index + 1)}
                  value={item}
                  {...rest}
                />
              )}
              name={name}
              control={control}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioGroup;
