import { FC, useState } from "react";
import styles from "./Tag.module.css";
import { ITagProps } from "./Tag.props";
import cn from "classnames";

export const Tag: FC<ITagProps> = ({
  appearance = "small",
  children,
  className,
  color = "white",
  href,
  ellipse,
  ...props
}): JSX.Element => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    if (appearance === "large") {
      setActive(!active);
      console.log("active");
    }
  };
  return (
    <div
      onClick={handleActive}
      className={cn(styles.tag, className, {
        [styles.small]: appearance === "small",
        [styles.medium]: appearance === "medium",
        [styles.white]: color === "white",
        [styles.blue]: color === "blue",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {active ? (
        <>
          <a
            className={cn(styles.tag, {
              [styles.active]: active === true,
            })}
          >
            {children}
            {ellipse}
          </a>
        </>
      ) : (
        <a>{children}</a>
      )}
    </div>
  );
};
