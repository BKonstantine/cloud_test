import { FC } from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import InputLabel from "../UI/input-label/input-label";
import Checkbox from "../UI/checkbox/checkbox";
import style from "./checkbox-group.module.css";

type Props = {
  label: string;
};

const CheckboxGroup: FC<Props> = ({ label }) => {
  const { control } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: "checkboxes",
  });

  return (
    <div className={style.container}>
      <InputLabel label={label} />
      <ul className={style.list}>
        {fields.map((item, index) => (
          <li className={style.item} key={item.id}>
            <Controller
              render={({ field: { onChange, value, ...rest } }) => (
                <Checkbox
                  checked={value === index + 1}
                  id={String(index)}
                  onChange={(e) => {
                    onChange(e.target.checked ? Number(e.target.value) : undefined);
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
