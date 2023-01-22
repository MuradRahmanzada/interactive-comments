import React from "react";


import styles from "./styles.module.css";

const TextArea = ({ ...props }) => {
  return (
    <textarea
      rows={4}
      {...props}
      className={styles.textarea}
    />
  );
};

export { TextArea };
