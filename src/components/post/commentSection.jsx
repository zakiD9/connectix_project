import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getCommentsByPostId, likecomment, PostreplyComment, unlikecomment } from "../../services/commentService";
import { usePostStore } from "../../store/postStore";

export default function CommentSection(){
    const [comments, setComments] = useState([]);
    const [liked,setLiked]=useState(false);
    const{selectedPost}= usePostStore();
    const [replyingTo, setReplyingTo] = useState(null); // comment.id
const [content, setcontent] = useState("");

   useEffect(() => {
    async function fetchComments() {
      try {
        const response = await getCommentsByPostId(selectedPost);
        // If your API returns data in response.data, use response.data
        setComments(response?.data || []);
        console.log("comments:",comments)
      } catch {
        setComments([]);
      }
    }
    fetchComments();
  }, [selectedPost]);
  console.log(selectedPost);

  const handleReplySubmit = async (id) => {
  if (!content.trim()) return;

  try {
    const response = await PostreplyComment(id, content);
    console.log("Replied to comment:",id);
    setcontent("");
    setReplyingTo(null);
    console.log(response);

  } catch (error) {
    console.error("Failed to post reply", error);
  }
};

const handleLikeComment = async (id) => {
  try {
    console.log("Liking comment ID:", id);
    if (liked) {
      const response = await unlikecomment(id);
      setLiked(false);
      console.log("success");
      return response;
    } else {
      const response = await likecomment();
      setLiked(true);
      console.log("success");
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

    return(
        <div className="space-y-2 ">
      {comments.map((comment, i) => (
  <div key={i} className="flex flex-col space-y-1 border-b py-2 last:border-b-0">
    <div className="flex items-start gap-3">
      <img
        src={comment.avatar}
        alt={comment.authorUsername}
        className="w-8 h-8 rounded-full mt-1"
      />
      <div className="flex-1">
        <div className="font-semibold text-sm">{comment.authorUsername}</div>
        <div className="text-gray-700 text-sm">{comment.content}</div>
        <div
          onClick={() => handleLikeComment(comment.id)}
          className="flex items-center mt-1 cursor-pointer text-gray-500 hover:text-blue-400"
        >
          <HeartIcon className="w-4 h-4 mr-1" />
          <span className="text-xs">Like</span>
        </div>
        <button
          onClick={() =>
            setReplyingTo(replyingTo === comment.id ? null : comment.id)
          }
          className="text-xs text-blue-500 mt-1 hover:underline"
        >
          Reply
        </button>

        {replyingTo === comment.id && (
          <div className="mt-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Write a reply..."
              className="flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm"
              value={content}
              onChange={(e) => setcontent(e.target.value)}
            />
            <button
              onClick={() => handleReplySubmit(comment.id)}
              className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        )}

        {/* ✅ REPLIES SECTION */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-2 space-y-1 ml-5 border-l pl-3">
            {comment.replies.map((reply) => (
              <div key={reply.id} className="flex items-start gap-2">
                <img
                  src={reply.avatar}
                  alt={reply.authorUsername}
                  className="w-6 h-6 rounded-full mt-1"
                />
                <div>
                  <div className="font-medium text-xs">{reply.authorUsername}</div>
                  <div className="text-gray-600 text-xs">{reply.content}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
))}


    </div>
    )
}