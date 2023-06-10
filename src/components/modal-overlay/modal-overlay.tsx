import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import style from "./modal-overlay.module.css";

type Props = {
  children: ReactNode;
};

const modal = document.querySelector("#modal") as HTMLElement;

const ModalOverlay: FC<Props> = ({ children }) => {
  return createPortal(<div className={style.overlay}>{children}</div>, modal);
};

export default ModalOverlay;
