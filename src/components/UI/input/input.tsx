import { forwardRef, ChangeEvent, FocusEvent, HTMLProps } from "react";
import cn from "classnames";
import style from "./input.module.css";

interface Props extends HTMLProps<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  value: string;
  name: string;  
  inputSize?: "small" | "large";
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(
  (
    { inputSize = "small", onChange, onBlur, value = "", name, ...rest },
    ref
  ) => (
    <input
      {...rest}
      id={name}
      ref={ref}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      className={cn(
        style.input,
        inputSize === "small" ? style.input_size_small : style.input_size_large
      )}
    />
  )
);

export default Input;
