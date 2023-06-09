import { FC } from "react";
import style from "./input-label.module.css";

type Props = {
  label: string;
};

const InputLabel: FC<Props> = ({ label }) => {
  return <span className={style.label}>{label}</span>;
};

export default InputLabel;
