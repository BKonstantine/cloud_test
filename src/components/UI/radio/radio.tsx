import { forwardRef, ChangeEvent, FocusEvent, HTMLProps } from "react";
import style from "./radio.module.css";

interface Props extends HTMLProps<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  value?: number;
  name: string;
}

type Ref = HTMLInputElement;

const Radio = forwardRef<Ref, Props>(
  ({ id, onChange, onBlur, value, name, ...rest }, ref) => {
    return (
      <label htmlFor={`${id}radio`} className={style.container}>
        <input
          {...rest}
          className={style.real}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type="radio"
          name={name}
          id={`${id}radio`}
          ref={ref}
        />
        <span className={style.custom}></span>
        {value}
      </label>
    );
  }
);

export default Radio;
