import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { Logo } from "../../components/Logo/Logo";
import About from "../../components/About/About";
import LanguageBlock from "../../components/LanguageBlock/LanguageBlock";
import Button from "../../components/Button/Button";
import ArrowSvg from "../../components/Svg/Arrow/Arrow";
import EllipseSvg from "../../components/Svg/Ellipse/Ellipse";

const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props}>
      <nav className={styles.nav}>
        <Logo appearance="large" color="black" children="LOGO" />
        <About />
        <div className={styles.nav__buttons}>
          <LanguageBlock />
          <Button
            color="blue"
            appearance="withoutFrame"
            children="НАЧАТЬ ПРОЕКТ"
          />
          <ArrowSvg />
        </div>
        <div className={styles.menu}>
          <EllipseSvg />
          <EllipseSvg />
          <EllipseSvg />
        </div>
      </nav>
    </header>
  );
};

export default Header;
