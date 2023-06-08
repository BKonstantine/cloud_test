import { FC, useMemo } from "react";
import Input from "../../UI/input/input";
import ReactSelect from "react-select";
import style from "./first-tab.module.css";
import { useFormContext, Controller } from "react-hook-form";

const FirstTab: FC = () => {
  const { control } = useFormContext();

  const options = useMemo(
    () => [
      { value: "field-sex-option-man", label: "man" },
      { value: "field-sex-option-woman", label: "woman" },
    ],
    []
  );

  return (
    <fieldset className={style.tab}>
      <Controller
        control={control}
        name="field-nickname"
        render={({ field }) => (
          <Input label="Nickname" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-name"
        render={({ field }) => (
          <Input label="Name" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-sername"
        render={({ field }) => (
          <Input label="Sername" placeholder="Placeholder" {...field} />
        )}
      />
      <Controller
        control={control}
        name="field-sex"
        render={({ field: { value, onChange } }) => (
          <ReactSelect
            value={value}
            onChange={onChange}
            options={options}
            placeholder="Не выбрано"
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
                boxShadow: state.isFocused
                  ? "0 0 0 1px black"
                  : style.boxShadow,
                "&:hover": {
                  borderColor: state.isFocused
                    ? "black"
                    : "rgba(0, 0, 0, 0.16)",
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
        )}
      />
    </fieldset>
  );
};

export default FirstTab;
