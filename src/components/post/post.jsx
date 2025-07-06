// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import PostActions from "./postActions";
import PostContent from "./postContent";
import TopOfPost from "./topofpost";
// import { usePostStore } from "../../store/postStore";

function Post ({post,onCommentClick ,onSelectpostList,SelectedPostList}) {
  return (
    <div className="bg-white shadow-md rounded-lg border relative  mb-4">
      <TopOfPost onSelectpostList={onSelectpostList} SelectedPostList={SelectedPostList} />
      <PostContent onCommentClick={onCommentClick} text={post.title} hashtags={post.hashtags} image={post.media} />
      <PostActions />
    </div>
  );
}
export default Post;