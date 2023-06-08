import { forwardRef, ChangeEvent, FocusEvent, HTMLProps } from "react";
import cn from "classnames";
import style from "./input.module.css";

interface Props extends HTMLProps<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  label?: string;
  inputSize?: "small" | "large";
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(
  (
    { inputSize = "small", label, onChange, onBlur, value, name, ...rest },
    ref
  ) => (
    <div
      className={cn(
        style.container,
        inputSize === "small"
          ? style.container_size_small
          : style.container_size_large
      )}
    >
      {label && <label htmlFor={name} className={style.label}>{label}</label>}
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
      {/* {<span className={style.error}></span>} */}
    </div>
  )
);

export default Input;
