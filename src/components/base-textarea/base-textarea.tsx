import { ChangeEvent, HTMLProps, FocusEvent, forwardRef } from "react";
import Textarea from "../UI/textarea/textarea";
import InputLabel from "../UI/input-label/input-label";
import InputError from "../UI/input-error/input-error";
import style from "./base-textarea.module.css";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
  name: string;
  label: string;
  error?: string;
  counter?: number;
}

type Ref = HTMLTextAreaElement;

const BaseTextarea = forwardRef<Ref, Props>((props, ref) => {
  const { counter, label, error, onChange, onBlur, value, name, ...rest } =
    props;

  return (
    <div className={style.container}>
      <InputLabel label={label} />
      <Textarea
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        ref={ref}
      />
      <div className={style.container__wrapper}>
        {error && <InputError error={error} />}
        <span className={style.counter}>{counter ? counter : 0}</span>
      </div>
    </div>
  );
});

export default BaseTextarea;
