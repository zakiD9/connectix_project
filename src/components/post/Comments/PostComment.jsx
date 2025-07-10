import {
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { postComment } from '../../../services/commentService';
import { useState } from 'react';
import { usePostStore } from '../../../store/postStore';

const PostActions = ({ userAvatar = "https://ui-avatars.com/api/?name=User" }) => {
  const [comment, setComment] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { selectedPost } = usePostStore();

  const handleMakeComment = async () => {
    if (!comment.trim()) return;
    try {
      setIsSending(true);
      const postId = selectedPost;
      const response = await postComment(postId, comment);
      console.log("Comment success:", response);
      setComment(""); // Clear input
    } catch (error) {
      console.error("Comment failed:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex px-4 py-3 border-t rounded-b-lg items-center mt-2 bg-white">
      <img
        src={userAvatar}
        alt="User"
        className="w-8 h-8 rounded-full mr-3"
      />
      <input
        type="text"
        placeholder="Write your comment.."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        disabled={isSending}
        className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      <button
        onClick={handleMakeComment}
        disabled={isSending || !comment.trim()}
        className="ml-2 p-2 border border-primary rounded-full hover:bg-blue-50 disabled:opacity-50"
      >
        <PaperAirplaneIcon
          className={`w-5 h-5 text-primary rotate-90 transition-transform duration-300 ${
            isSending ? "translate-y-[-4px] scale-110" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default PostActions;
