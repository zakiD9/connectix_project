// import { useEffect, useState } from "react";
// import { getCommentsByPostId, likecomment, PostreplyComment, unlikecomment } from "../../../services/commentService";
// import { usePostStore } from "../../../store/postStore";
import { useEffect, useState } from "react";
import Comment from "./CommentComponent";
import { getCommentsByPostId } from "../../../services/commentService";
import { usePostStore } from "../../../store/postStore";

export default function CommentSection(){
    const [comments, setComments] = useState([]);
    const{selectedPost}= usePostStore();
    const [visibleReplies,setVisibleReplies]=useState({}); 

   useEffect(() => {
    async function fetchComments() {
      try {
        const response = await getCommentsByPostId(selectedPost);
        setComments(response);
      } catch {
        setComments([]);
      }
    }
    fetchComments();
  }, [selectedPost]);
  console.log(selectedPost);

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