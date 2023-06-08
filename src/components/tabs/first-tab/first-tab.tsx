import { FC } from "react";
import Input from "../../UI/input/input";
import style from "./first-tab.module.css";

const FirstTab: FC = () => {
  return (
    <div className={style.tab}>      
      <Input />
    </div>
  );
};

export default FirstTab;
