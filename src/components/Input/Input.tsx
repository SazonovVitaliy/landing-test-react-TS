import React, { FC } from "react";
import styles from "./Input.module.css";
import { IInputProps } from "./Input.props";

const Input: FC<IInputProps> = ({ children, label, type, ...props }) => {
  return (
    <form className={styles.form}>
      <div className={styles.item}>
        <input type={type} className={styles.form__input} required />
        <label className={styles.form__label}>
          {label}
          <span className={styles.valid}>*</span>
        </label>
      </div>
    </form>
  );
};

export default Input;
