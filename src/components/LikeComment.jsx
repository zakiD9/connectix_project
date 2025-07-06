import { useState } from "react"
import { likecomment, unlikecomment } from "../services/commentService";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";


export default function CommentLike({likes=0}){
    const[liked,setLiked]=useState(false);

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
        <div className="flex text-gray-500 mx-2">
            <button onClick={handleLikeComment}>
                 {liked ? (
  <SolidHeart className="w-5 h-5 text-red-500" />
) : (
  <OutlineHeart className="w-5 h-5 text-gray-500" />
)}
            </button>
            <span>{likes}</span>
        </div>
    )
}