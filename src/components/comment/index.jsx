import React from "react";
import { Reactions } from "./reactions";
import { Header } from "./header";
import { Body } from "./body";
import { NewCommentEditor } from "../new-comment-editor";
import { CommentContextProvider, useComment } from "../../hooks/useComment";


import styles from "./styles.module.css";

const Comment = () => {
  const { isReplying, currentUser, comment, onNewReply, } = useComment();

  if (!comment) {
    return null;
  }
  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.commentContentArea}>
          <Header />
          <Body />
        </div>
      </div>
      {comment?.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment.replies?.map((reply) => (
            <CommentContextProvider
              key={reply.id}
              data={{ comment: reply, currentUser }}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
      {isReplying && (
        <NewCommentEditor
          onClick={onNewReply}
          isReply
          image={currentUser.image.png}
          alt={currentUser.username}
        />
      )}
    </>
  );
};

export { Comment };
