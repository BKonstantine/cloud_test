import { FC } from "react";
import style from "./input-error.module.css";

type Props = {
  error: string;
};

const InputError: FC<Props> = ({ error }) => {
  return <span className={style.error}>{error}</span>;
};

export default InputError;
