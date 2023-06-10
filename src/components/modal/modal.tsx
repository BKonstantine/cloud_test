import { FC } from "react";
import ModalSuccess from "./modal-success/modal-success";
import ModalError from "./modal-error/modal-error";

type Props = {
  result: string;
  onClose: () => void;
};

const Modal: FC<Props> = ({ result, onClose }) => {
  return (
    <>
      {result === "success" ? (
        <ModalSuccess />
      ) : (
        <ModalError onClose={onClose} />
      )}
    </>
  );
};

export default Modal;
