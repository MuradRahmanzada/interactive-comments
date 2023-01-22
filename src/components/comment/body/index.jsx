import React, { useState } from "react";
import { useComment } from "../../../hooks/useComment";
import { Button } from "../../button";
import { TextArea } from "../../textarea";

import styles from "./styles.module.css";

const Body = () => {
  const {
    onUpdate,
    isEditing,
    comment: { content, replyingTo },
  } = useComment();

  const [comment, setComment] = useState(content);

  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };

  const handleUpdate = () => {
    onUpdate(comment);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <TextArea value={comment} onChange={handleCommentChange} />
          <Button
            className={styles.updateButton}
            variant="primary"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </>
      ) : (
        <p className={styles.content}>
          {replyingTo && (
            <span className={styles.replyingTo}>@{replyingTo}&nbsp;</span>
          )}
          {content}
        </p>
      )}
    </div>
  );
};

export { Body };
