import React from "react";
import { Button } from "../../button";
import styles from "./styles.module.css";
import { useComment } from "../../../hooks/useComment";
const Reactions = () => {
  const {
    comment: { score },
    onNegativeReaction,
    onPositiveReaction,
  } = useComment();

  return (
    <div className={styles.reactionsWrapper}>
      <Button
        aria-labelledby="Positive reaction button"
        onClick={onPositiveReaction}
      >
        <img src="./images/icon-plus.svg" aria-hidden="true" />
      </Button>
      <p>{score}</p>
      <Button
        aria-labelledby="Negative reaction button"
        onClick={onNegativeReaction}
      >
        <img src="./images/icon-minus.svg" aria-hidden="true" />
      </Button>
    </div>
  );
};

export { Reactions };
