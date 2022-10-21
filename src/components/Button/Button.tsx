import React, { FC } from "react";
import styles from "./Button.module.css";
import cn from "classnames";
import { IButtonProps } from "./Button.props";

const Button: FC<IButtonProps> = ({
  children,
  appearance,
  className,
  color,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.withoutFrame]: appearance === "withoutFrame",
        [styles.blue]: color === "blue",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
