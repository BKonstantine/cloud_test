import { forwardRef, ChangeEvent, FocusEvent, HTMLProps } from "react";
import cn from "classnames";
import style from "./input.module.css";

interface Props extends HTMLProps<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(
  ({ onChange, onBlur, value = "", name, ...rest }, ref) => (
    <input
      {...rest}
      id={name}
      ref={ref}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      className={cn(style.input)}
    />
  )
);

export default Input;
