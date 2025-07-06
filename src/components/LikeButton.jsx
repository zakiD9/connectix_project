import { useState } from "react";
import { like, unlike } from "../services/postService";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";

export default function Like({postId,likes}){
const [liked ,setLiked]=useState(false);
    const handleLike = async()=>{
      try{
      if(liked){
        setLiked(false);
        const response = unlike(postId);
        console.log(response);
        return response
      }
      setLiked(true);
      const response = like(postId);
      console.log(response);
      return response
    }catch(error){
    console.log(error);
    }
    console.log(liked);
    }
    return(
        <div onClick={handleLike}  className={`flex items-center cursor-pointer hover:text-blue-400`}>
          {liked ? (
  <SolidHeart className="w-6 h-6 mr-1 text-red-500" />
) : (
  <OutlineHeart className="w-6 h-6 mr-1" />
)}

          <span>{likes} Likes</span>
        </div>
    )
}