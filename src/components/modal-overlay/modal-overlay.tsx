import { FC, ReactNode } from "react";
import style from "./modal-overlay.module.css";

type Props = {
  children: ReactNode;
};

const ModalOverlay: FC<Props> = ({ children }) => {
  return <div className={style.overlay}>{children}</div>;
};

export default ModalOverlay;
