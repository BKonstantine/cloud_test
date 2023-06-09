import { ChangeEvent, HTMLProps, FocusEvent, forwardRef } from "react";
import style from "./textarea.module.css";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
  name: string;
}

type Ref = HTMLTextAreaElement;

const Textarea = forwardRef<Ref, Props>(
  ({ onChange, onBlur, value = "", name, ...rest }, ref) => {
    return (
      <textarea
        className={style.textarea}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        id={name}
        {...rest}
        ref={ref}
      ></textarea>
    );
  }
);

export default Textarea;
