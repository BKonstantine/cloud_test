import { forwardRef, ChangeEvent, FocusEvent, HTMLProps } from "react";
import style from "./checkbox.module.css";

interface Props extends HTMLProps<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  value: number;
  name: string;
  inputSize?: "small" | "large";
}

type Ref = HTMLInputElement;

const Checkbox = forwardRef<Ref, Props>(
  ({ onChange, onBlur, value = "", name, ...rest }, ref) => {
    return (
      <label htmlFor="checkbox">
        <input
          {...rest}
          className={style.real}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type="checkbox"
          name={name}
          id="checkbox"
          ref={ref}
        />
        <span className={style.custom}></span>
      </label>
    );
  }
);

export default Checkbox;
