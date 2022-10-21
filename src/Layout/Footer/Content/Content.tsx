import React, { FC } from "react";
import { Htag } from "../../../components/Htag/Htag";
import { Logo } from "../../../components/Logo/Logo";
import SocialSvg from "../../../components/Svg/Social/social";
import { Tag } from "../../../components/Tag/Tag";
import styles from "./Content.module.css";

const Content: FC = () => {
  return (
    <div className={styles.footer__content}>
      <Logo
        className={styles.logo}
        appearance="large"
        color="white"
        children="LOGO"
      />
      <div className={styles.content}>
        <div className={styles.content__block}>
          <Htag children="Услуги" color="white" tag="h2" />
          <Tag children="Support and development" color="white" href="#" />
          <Tag children="UI/UX and product design" color="white" href="#" />
          <Tag
            children="Progressive Web Applications (PWA)"
            color="white"
            href="#"
          />
        </div>
        <div className={styles.content__block}>
          <Htag children="Компания" color="white" tag="h2" />
          <Tag children="О компании" color="white" href="#" />
          <Tag children="Проекты" color="white" href="#" />
          <Tag children="Контакты" color="white" href="#" />
        </div>
        <div className={styles.content__block}>
          <Htag children="Контакты" color="white" tag="h2" />
          <Tag children="Скачать презентацию" color="white" href="#" />
          <Tag children="+7 (499) 999-99-99" color="white" href="#" />
          <Tag children="info@site.com" color="white" href="#" />
        </div>
      </div>
      <div className={styles.content__block_social}>
        <SocialSvg />
      </div>
      <div className={styles.rights}>
        <div>© Company 2022. All rights reserved.</div>
        <div>Политика конфиденциальности</div>
      </div>
    </div>
  );
};

export default Content;
