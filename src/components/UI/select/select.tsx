/* import { forwardRef, ForwardedRef } from "react";
import ReactSelect, { Props as SelectProps } from "react-select";
import style from "./select.module.css";

type Options = {
  value: string;
  label: string;
};

type Ref = ForwardedRef<Select>;

type Props = SelectProps<Options> & {  
  label?: string;
};

const Select = forwardRef<Ref, Props>(
  ({ options, placeholder, label, ...rest }, ref) => {
    return (
      <div className={style.select}>
        {label && <label className={style.select__label}>{label}</label>}
        <ReactSelect
          options={options}
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

export default Select; */
