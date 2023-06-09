import { FC } from "react";
import InputLabel from "../UI/input-label/input-label";
import Button from "../UI/button/button";
import ButtonRemove from "../UI/button-remove/button-remove";
import CrossIcon from "../../icons/cross-icon";
import style from "./input-group.module.css";

type Props = {
  label: string;
};

const InputGroup: FC<Props> = ({ label }) => {
  return (
    <div className={style.container}>
      <InputLabel label={label} />
      <ul className={style.list}>
        <ButtonRemove />
      </ul>
      <Button color="secondary" buttonSize="small">
        <CrossIcon />
      </Button>
    </div>
  );
};

export default InputGroup;
