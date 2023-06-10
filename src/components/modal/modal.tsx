import { FC } from "react";
import ModalSuccess from "./modal-success/modal-success";
import ModalError from "./modal-error/modal-error";

type Props = {
  result: string;
};

const Modal: FC<Props> = ({ result }) => {
  return <>{result === "success" ? <ModalSuccess /> : <ModalError />}</>;
};

export default Modal;
