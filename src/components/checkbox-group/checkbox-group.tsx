import { FC } from "react";
import { nanoid } from "nanoid";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import InputLabel from "../UI/input-label/input-label";
import Checkbox from "../UI/checkbox/checkbox";
import style from "./checkbox-group.module.css";

type ArrayType = number[] | string[];

type Props = {
  label: string;
  array: ArrayType;
  name: string;
};

const CheckboxGroup: FC<Props> = ({ label, array, name }) => {
  const { control, watch } = useFormContext();
  const { append, remove } = useFieldArray({
    control,
    name,
  });

  const checkboxArray: ArrayType = watch(name);  

  const getIndex = (value: number | string) => {
    return checkboxArray.findIndex((item) => item === value);
  };

  return (
    <div className={style.container}>
      <InputLabel label={label} />
      <ul className={style.list}>
        {array.map((item, index) => (
          <li className={style.item} key={nanoid()}>
            <Controller
              render={({ field: { onChange, value, ...rest } }) => (
                <Checkbox
                  checked={value === index + 1}
                  id={String(index)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onChange(Number(e.target.value));
                      append(item);
                    } else {
                      onChange(undefined);
                      remove(getIndex(item));
                    }
                  }}
                  label={String(index + 1)}
                  value={index + 1}
                  {...rest}
                />
              )}
              name={`field-checkbox-group-option-${index + 1}`}
              control={control}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxGroup;
