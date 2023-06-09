import { FC } from "react";
import CheckboxGroup from "../../checkbox-group/checkbox-group";
import style from "./second-tab.module.css";

const SecondTab: FC = () => {
  return (
    <fieldset className={style.tab}>
      <CheckboxGroup label="Checkbox group"/>
    </fieldset>
  );
};

export default SecondTab;
