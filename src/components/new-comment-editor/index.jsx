import React, { useState } from "react";
import { TextArea } from "../textarea";
import { Button } from "../button";

import styles from "./styles.module.css";

const NewCommentEditor = ({ isReply = false, image, alt, onClick }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = ({ target }) => {
    setNewComment(target.value);
  };

  const handleClick = () => {
    onClick(newComment);
    setNewComment("");
  };

  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <TextArea
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
      <Button variant="primary" onClick={handleClick}>
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
};

export { NewCommentEditor };
