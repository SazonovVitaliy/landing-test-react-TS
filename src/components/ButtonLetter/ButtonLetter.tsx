import { FC, useState } from "react";
import styles from "./ButtonLetter.module.css";
import { IButtonLetterProps } from "./ButtonLetter.props";
import cn from "classnames";
import SvgIcon from "../Svg/SvgIcon/SvgIcon";

export const ButtonLetter: FC<IButtonLetterProps> = ({
  appearance,
  className,
  ...props
}): JSX.Element => {
  const [content, setContent] = useState("Отправить");

  return (
    <>
      <button
        onMouseLeave={() => setContent("Отправить")}
        onClick={() => setContent("Ваше сообщение отправлено!")}
        className={cn(styles.button, className, {
          [styles.primary]: appearance === "primary",
          [styles.white]: appearance === "white",
        })}
        {...props}
      >
        <SvgIcon />
        <div className="content">{content}</div>
      </button>
    </>
  );
};
