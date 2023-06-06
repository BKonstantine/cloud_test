import { forwardRef, ChangeEvent, FocusEvent, HTMLProps } from "react";
import style from "./input.module.css"

interface Props extends HTMLProps<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(
  ({ onChange, onBlur, value, name, ...rest }, ref) => (
    <input
      {...rest}
      ref={ref}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      className={style.input}
    />
  )
);

export default Input;