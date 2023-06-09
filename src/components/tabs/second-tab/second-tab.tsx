import { FC } from "react";
import CheckboxGroup from "../../checkbox-group/checkbox-group";
import RadioGroup from "../../radio-group/radio-group";
import style from "./second-tab.module.css";

const SecondTab: FC = () => {
  return (
    <fieldset className={style.tab}>
      <CheckboxGroup label="Checkbox group" />
      <RadioGroup label="Radio group" />
    </fieldset>
  );
};

export default SecondTab;
