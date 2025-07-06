import { HeartIcon, ShareIcon } from "lucide-react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Like from "../LikeButton";
import EditPostArea from "../EditPostArea";
import { usePostStore } from "../../store/postStore";

function PostContent({ onCommentClick,text="ro7 bla dsara", hashtags=["djazayr ya ma", "salowat"], image,likes = 0, comments = 0, shares = 0,postId }) {
  const{onEdit}=usePostStore();
  return (
    <div className="px-4 pt-5 pb-2">
      {onEdit ? (<EditPostArea text={text} />) :(<div className="text-gray-700 text-sm mb-2">
        {text}
        {hashtags && (
          <span className="ml-1">
            {hashtags.map((tag, i) => (
              <span key={i} className="text-primary hover:underline mr-1">#{tag}</span>
            ))}
          </span>
        )}
      </div>)}
      {image && (
        <img
          src={image?.[0]?.url}
          alt="Post"
          className="rounded-xl w-full object-cover mb-2"
        />
      )}
      <div className="flex px-4 items-center justify-between text-gray-500 text-sm mb-2">
      <div className="flex items-center space-x-6">
        <Like postId={postId} likes={likes} />
        <div onClick={() => {
    onCommentClick && onCommentClick();
  }} className="flex items-center cursor-pointer hover:text-blue-400">
          <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-1" />
          <span >{comments} Comments</span>
        </div>
        <div className="flex items-center cursor-pointer hover:text-blue-400">
          <ShareIcon className="w-5 h-5 mr-1" />
          <span>{shares} Share</span>
        </div>
      </div>
    </div>
    </div>
  );
}
export default PostContent;