import { useState } from "react";
import { PostreplyComment } from "../services/commentService";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { usePostStore } from "../store/postStore";

export default function SendReply({ id }) {
  const [writeReply, setWriteReply] = useState("");
  const [animate, setAnimate] = useState(false);
  const {selectedPost}=usePostStore();

  const handleReplySubmit = async () => {
    if (!writeReply.trim()) return;
    console.log(id,writeReply,selectedPost);
    try {
      setAnimate(true);
      await PostreplyComment(id,writeReply,selectedPost);
      setWriteReply("");
    } catch (err) {
      console.error("Reply failed", err);
    } finally {
      setTimeout(() => setAnimate(false), 500); 
    }
  };

  return (
    <div className="flex items-center px-4 py-2 ml-10 bg-white rounded-lg shadow-sm">
      <img src="user" alt="User" className="w-8 h-8 rounded-full mr-3" />
      <input
        type="text"
        placeholder="Write a reply..."
        value={writeReply}
        onChange={(e) => setWriteReply(e.target.value)}
        className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <button
        onClick={handleReplySubmit}
        className="ml-2 p-2 border border-primary rounded-full hover:bg-blue-50"
      >
        <PaperAirplaneIcon
          className={`w-5 h-5 text-primary rotate-90 transition-transform duration-300 ${
            animate ? "translate-y-[-6px] rotate-[135deg] scale-110" : ""
          }`}
        />
      </button>
    </div>
  );
}
