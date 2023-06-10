import { ChangeEvent, FocusEvent, HTMLProps, forwardRef } from "react";
import Input from "../UI/input/input";
import InputLabel from "../UI/input-label/input-label";
import InputError from "../UI/input-error/input-error";
import style from "./base-input.module.css";

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  value: string;
  name: string;  
}

type Ref = HTMLInputElement;

const BaseInput = forwardRef<Ref, Props>((props, ref) => {
  const { label, error, onChange, onBlur, value, name,  ...rest } =
    props;

  return (
    <div className={style.container}>
      <InputLabel label={label} />
      <Input
        {...rest}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}        
        ref={ref}
      />
      {error && <InputError error={error} />}
    </div>
  );
});

export default BaseInput;
