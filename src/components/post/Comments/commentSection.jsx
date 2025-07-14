// import { useEffect, useState } from "react";
// import { getCommentsByPostId, likecomment, PostreplyComment, unlikecomment } from "../../../services/commentService";
// import { usePostStore } from "../../../store/postStore";
import { useEffect, useState } from "react";
import Comment from "./CommentComponent";
import { usePostStore } from "../../../store/postStore";

export default function CommentSection(){
    const{selectedPost ,fetchComments,comments}= usePostStore();
    const [visibleReplies,setVisibleReplies]=useState({}); 

   useEffect(() => {
    fetchComments(selectedPost)
  }, [fetchComments]);

   const toggleReplies = (commentId) => {
    setVisibleReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };


console.log(comments)
    return(
        <div className="space-y-2">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          showReplies={visibleReplies[comment.id]}
          onToggleReplies={() => toggleReplies(comment.id)}
        />
      ))}
    </div>
    )
}