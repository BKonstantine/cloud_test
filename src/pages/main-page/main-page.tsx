import { FC } from "react";
import cn from "classnames";
import Link from "../../components/UI/link/link";
import ButtonLink from "../../components/UI/button-link/button-link";
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
            <Link href="https://t.me/kbuzunov" text="Telegram" />
            <Link href="https://github.com/BKonstantine" text="GitHub" />
            <Link
              href="https://file.notion.so/f/s/dc5ba534-6f6c-4bb9-8788-454c22e57c22/%D0%91%D1%83%D0%B7%D1%83%D0%BD%D0%BE%D0%B2_%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.pdf?id=6d6afd34-3a07-40c1-9080-1ae16f7c2f94&table=block&spaceId=079a14fc-669a-4afd-bd77-e61c47945c97&expirationTimestamp=1686126253618&signature=hNIAhfMQbn2aWHVYIwmv_ubYzV1BWYkYcVfRLm2ZSk4&downloadName=%D0%91%D1%83%D0%B7%D1%83%D0%BD%D0%BE%D0%B2+%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD+%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.pdf"
              text="Resume"
            />
          </ul>
        </div>
      </header>
      <main className={style.profile__main}>
        <div
          className={cn(
            style.profile__container,
            style.profile__container_place_main
          )}
        >
          <div className={style.info}>
            <label className={style.info__label}>Номер телефона</label>
            <p className={style.info__data}>+7 (924) 364-11-39</p>
          </div>
          <div className={style.info}>
            <label className={style.info__label}>Email</label>
            <p className={style.info__data}>buzunov.constantine@yandex.ru</p>
          </div>
        </div>
        <ButtonLink to="/create">Начать</ButtonLink>
      </main>
    </div>
  );
};

export default MainPage;
