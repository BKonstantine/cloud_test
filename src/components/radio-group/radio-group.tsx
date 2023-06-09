import { FC } from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import InputLabel from "../UI/input-label/input-label";
import Radio from "../UI/radio/radio";
import style from "./radio-group.module.css";

type Props = {
  label: string;
};

const RadioGroup: FC<Props> = ({ label }) => {
  const { control } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: "radios",
  });

  return (
    <div className={style.container}>
      <InputLabel label={label} />
      <ul className={style.list}>
        {fields.map((item, index) => (
          <li className={style.item} key={item.id}>
            <Controller
              render={({ field: { onChange, value, ...rest } }) => (
                <Radio
                  id={String(index)}
                  onChange={(e) => {
                    onChange(e.target.checked ? Number(e.target.value) : null);
                  }}
                  value={index + 1}
                  {...rest}
                />
              )}
              name={`radio`}
              control={control}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioGroup;
