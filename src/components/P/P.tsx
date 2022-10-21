import { FC } from "react";
import styles from "./P.module.css";
import { IPProps } from "./P.props";
import cn from "classnames";
export const P: FC<IPProps> = ({
  appearance = "small",
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.medium]: appearance === "medium",
        [styles.small]: appearance === "small",
        [styles.large]: appearance === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
