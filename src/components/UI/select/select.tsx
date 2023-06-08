import { FC } from "react";
import ReactSelect from "react-select";

type Props = {
  //TODO Исправить типизацию
  options: any;
  placeholder: string;
  value: string;
  onChange: () => void;
};

const Select: FC<Props> = ({ options, placeholder, value, onChange }) => {
  return (
    <ReactSelect
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={{
        container: (style) => ({
          ...style,
          maxWidth: "300px",
        }),
        indicatorSeparator: (style) => ({
          ...style,
          display: "none",
        }),
        placeholder: (style) => ({
          ...style,
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          color: "rgba(0, 0, 0, 0.48)",
          fontFamily: "inherit",
        }),
        control: (style, state) => ({
          ...style,
          borderColor: state.isFocused ? "black" : "rgba(0, 0, 0, 0.16)",
          boxShadow: state.isFocused ? "0 0 0 1px black" : style.boxShadow,
          "&:hover": {
            borderColor: state.isFocused ? "black" : "rgba(0, 0, 0, 0.16)",
          },
          height: "44px",
        }),
        menu: (style) => ({
          ...style,
          margin: "0",
        }),
        menuList: (style) => ({
          ...style,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          padding: "12px",
        }),
        option: (style, state) => ({
          ...style,
          fontSize: "14px",
          lineHeight: "20px",
          color: "#333333",
          padding: "4px 0",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: state.isFocused
              ? "rgba(0, 0, 0, 0.16)"
              : style.backgroundColor,
          },
        }),
        singleValue: (style) => ({
          ...style,
          fontSize: "14px",
          lineHeight: "20px",
          color: "#333333",
        }),
      }}
    />
  );
};

export default Select;
