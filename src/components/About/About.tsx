import React, { FC } from "react";
import styles from "./About.module.css";
import { Tag } from "../Tag/Tag";
import EllipseSvg from "../Svg/Ellipse/Ellipse";

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Tag
        className={styles.about__link}
        children="Проекты"
        color="black"
        appearance="large"
        ellipse={<EllipseSvg />}
        href="#"
      />
      <Tag
        className={styles.about__link}
        children="О компании"
        color="black"
        appearance="large"
        ellipse={<EllipseSvg />}
        href="#"
      />
      <Tag
        className={styles.about__link}
        children="Контакты"
        color="black"
        appearance="large"
        ellipse={<EllipseSvg />}
        href="#"
      />
    </div>
  );
};

export default About;
