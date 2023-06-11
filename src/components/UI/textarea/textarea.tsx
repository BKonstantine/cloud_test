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
    
    function autoGrowTextArea(element: HTMLTextAreaElement) {
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
    }

    const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
      autoGrowTextArea(event.currentTarget as HTMLTextAreaElement);
    };

    return (
      <textarea
        className={style.textarea}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        onInput={handleInput}
        name={name}
        id={name}
        {...rest}
        ref={ref}
      ></textarea>
    );
  }
);

export default Textarea;
