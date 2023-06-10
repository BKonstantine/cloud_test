import { FC } from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import InputLabel from "../UI/input-label/input-label";
import Input from "../UI/input/input";
import Button from "../UI/button/button";
import ButtonRemove from "../UI/button-remove/button-remove";
import CrossIcon from "../../icons/cross-icon";
import style from "./input-group.module.css";

type Props = {
  label: string;
};

const InputGroup: FC<Props> = ({ label }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });

  return (
    <div className={style.container}>
      <InputLabel label={label} />
      <ul className={style.list}>
        {fields.map((item, index) => (
          <li className={style.item} key={item.id}>
            <Controller
              render={({ field }) => (
                <>
                  <Input placeholder="Placeholder" {...field} />
                  <ButtonRemove onClick={() => remove(index)} />
                </>
              )}
              name={`advantages[${index}].advantage`}
              control={control}
            />
          </li>
        ))}
      </ul>
      <Button
        color="secondary"
        buttonSize="small"
        onClick={() => append({ advantage: "" })}
      >
        <CrossIcon />
      </Button>
    </div>
  );
};

export default InputGroup;
