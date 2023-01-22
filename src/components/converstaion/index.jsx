import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";
import { CommentContextProvider } from "../../hooks/useComment";

import Data from "../../../data.json";


import styles from "./styles.module.css";

const Conversation = () => {
  const [comments, setComments] = useState(Data.comments);

  const handleNewComment = (newComment) => {
    setComments([
      ...comments,
      {
        id: uuidv4(),
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        score: 0,
        user: Data.currentUser,
      },
    ]);
  };
  return (
    <div className={styles.conversationWrapper}>
      {comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}
      <NewCommentEditor
        onClick={handleNewComment}
        image={Data.currentUser.image.png}
        alt={Data.currentUser.username}
      />
    </div>
  );
};

export { Conversation };
