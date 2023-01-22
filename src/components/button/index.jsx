import React from "react";
import { clsx } from "clsx";
import styles from "./styles.module.css";

const Button = ({ variant = "ghost", children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, styles[variant], className)}
    >
      {children}
    </button>
  );
};

export { Button };
