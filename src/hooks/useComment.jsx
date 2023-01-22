import { useState, useMemo, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const CommentContext = createContext();

const CommentContextProvider = ({ children, data }) => {
  const [comment, setComment] = useState(data.comment);
  const [isReplying, setReplying] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const onReply = () => {
    setReplying(!isReplying);
  };

  const onDelete = () => {
    setComment(null);
  };

  const onEdit = () => {
    setEditing(!isEditing);
  };

  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
    });
    onEdit();
  };

  const onNewReply = (newComment) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          id: uuidv4(),
          content: newComment,
          createdAt: new Date().toLocaleDateString(),
          score: 0,
          replyingTo: comment.user.username,
          user: data.currentUser,
        },
      ],
    });
    onReply();
  };

  const onPositiveReaction = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };

  const onNegativeReaction = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const contextData = useMemo(
    () => ({
      onUpdate,
      onPositiveReaction,
      onNegativeReaction,
      onNewReply,
      comment,
      currentUser: data.currentUser,
      isReplying,
      onReply,
      onDelete,
      isEditing,
      onEdit,
    }),
    [isReplying, isEditing, comment]
  );
  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
};

const useComment = () => {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("There is no Comment Provider, first import it ");
  }

  return context;
};

export { useComment, CommentContextProvider };
