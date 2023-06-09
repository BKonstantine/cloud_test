import { FC } from "react";
import InputGroup from "../../input-group/input-group";
import CheckboxGroup from "../../checkbox-group/checkbox-group";
import RadioGroup from "../../radio-group/radio-group";
import style from "./second-tab.module.css";

const SecondTab: FC = () => {
  return (
    <fieldset className={style.tab}>
      <InputGroup label="Advantages" />      
      <CheckboxGroup label="Checkbox group" />
      <RadioGroup label="Radio group" />
    </fieldset>
  );
};

export default SecondTab;
