import { useState } from "react";
import CommentLike from "../../LikeComment";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { PostreplyComment } from "../../../services/commentService";
import NoBgButton from "../../nobgbutton";
import SendReply from "../../SendReply";

export default function Comment({ comment }) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Main comment */}
      <div className="flex items-start gap-2 p-2">
        <div className="mr-2">
          <img
            className="rounded-full w-8 h-8 border"
            src={comment.authorUsername}
            alt={comment.authorUsername}
          />
        </div>
        <div className="flex-col bg-gray-100 px-3 py-2 rounded-lg flex-1">
          <div className="flex justify-between">
            <h2 className="font-semibold">{comment.authorUsername}</h2>
            <span className="text-gray-400 text-sm">2000/05/10</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-gray-700">{comment.content}</span>
            <CommentLike />
          </div>

          <div className="flex justify-end gap-2 text-sm mt-2">
            <NoBgButton onClick={() => setShowReplies(!showReplies)} className="text-blue-500">
              {showReplies ? "Hide" : "Replies"}
            </NoBgButton>
            <NoBgButton onClick={() => setShowReplyInput(!showReplyInput)}>
              {showReplyInput ? "Cancel" : "Reply"}
            </NoBgButton>
          </div>
        </div>
      </div>

      {showReplyInput && (<SendReply id={comment.id} />)}

      {showReplies && comment.replies?.length > 0 && (
          <div className="ml-10 space-y-2">
         {comment.replies.map((reply) => ( 
            <Comment key={reply.id} comment={reply} /> // reusing the same component
          ))}
         </div>
       )} 
    </div>
  );
}
