import React, { FC } from "react";
import { IHtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag: FC<IHtagProps> = ({ tag, children }): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h3":
      return <h2 className={styles.h3}>{children}</h2>;
    case "h3__gray":
      return <h2 className={styles.h3__gray}>{children}</h2>;
    default:
      return <></>;
  }
};
