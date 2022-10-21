import React, { FC } from "react";
import styles from "./LanguageBlock.module.css";
import { Tag } from "../Tag/Tag";
import EllipseSvg from "../Svg/Ellipse/Ellipse";

const LanguageBlock: FC = () => {
  return (
    <div className={styles.languageblock}>
      <Tag
        appearance="large"
        children="RU"
        color="black"
        ellipse={<EllipseSvg />}
        className={styles.about__link}
      />
      <Tag
        appearance="large"
        children="EN"
        color="black"
        ellipse={<EllipseSvg />}
        className={styles.about__link}
      />
    </div>
  );
};

export default LanguageBlock;
