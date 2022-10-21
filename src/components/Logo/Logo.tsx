import { FC } from "react";
import styles from "./Logo.module.css";
import { ILogoProps } from "./Logo.props";
import cn from "classnames";
export const Logo: FC<ILogoProps> = ({
  appearance = "large",
  color = "black",
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <header
      className={cn(styles.header, className, {
        [styles.small]: appearance === "small",
        [styles.large]: appearance === "large",
        [styles.black]: color === "black",
        [styles.white]: color === "white",
      })}
      {...props}
    >
      {children}
    </header>
  );
};
