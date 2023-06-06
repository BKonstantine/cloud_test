import { FC } from "react";
import cn from "classnames";
import FolderIcon from "../../icons/folder-icon";
import ButtonLink from "../../components/UI/button-link/button-link";
import Input from "../../components/UI/input/input";
import style from "./main-page.module.css";

const MainPage: FC = () => {
  return (
    <div className={style.profile}>
      <header className={style.profile__header}>
        <p className={style.profile__icon}>БК</p>
        <div
          className={cn(
            style.profile__container,
            style.profile__container_place_header
          )}
        >
          <h1 className={style.profile__name}>Бузунов Костя</h1>
          <ul className={style.profile__links}>
            <li className={style.profile__link}>
              <a
                href="https://t.me/kbuzunov"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FolderIcon />
                Telegram
              </a>
            </li>
            <li className={style.profile__link}>
              <a
                href="https://github.com/BKonstantine"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FolderIcon />
                GitHub
              </a>
            </li>
            <li className={style.profile__link}>
              <a
                href="https://file.notion.so/f/s/dc5ba534-6f6c-4bb9-8788-454c22e57c22/%D0%91%D1%83%D0%B7%D1%83%D0%BD%D0%BE%D0%B2_%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.pdf?id=6d6afd34-3a07-40c1-9080-1ae16f7c2f94&table=block&spaceId=079a14fc-669a-4afd-bd77-e61c47945c97&expirationTimestamp=1686126253618&signature=hNIAhfMQbn2aWHVYIwmv_ubYzV1BWYkYcVfRLm2ZSk4&downloadName=%D0%91%D1%83%D0%B7%D1%83%D0%BD%D0%BE%D0%B2+%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD+%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                <FolderIcon />
                Resume
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main className={style.profile__main}>
        {/* <ButtonLink to="/create">Начать</ButtonLink> */}
        <Input />
      </main>
    </div>
  );
};

export default MainPage;
