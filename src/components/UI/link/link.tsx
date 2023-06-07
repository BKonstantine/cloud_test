import { FC, memo } from "react";
import style from "./link.module.css";
import FolderIcon from "../../../icons/folder-icon";

type Props = {
  href: string;
  text: string;
};

const Link: FC<Props> = memo(({ href, text }) => {
  return (
    <li className={style.container}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <FolderIcon />
        {text}
      </a>
    </li>
  );
});

export default Link;
