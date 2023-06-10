import { FC } from "react";
import InputGroup from "../../input-group/input-group";
import CheckboxGroup from "../../checkbox-group/checkbox-group";
import RadioGroup from "../../radio-group/radio-group";
import style from "./second-tab.module.css";

const SecondTab: FC = () => {
  const array = [1, 2, 3];

  return (
    <fieldset className={style.tab}>
      <InputGroup label="Advantages" name="advantages"/>
      <CheckboxGroup label="Checkbox group" array={array} name="checkboxes" />
      <RadioGroup label="Radio group" array={array} name="radio"/>
    </fieldset>
  );
};

export default SecondTab;
