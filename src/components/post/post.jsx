import TopOfPost from "./topofpost";
import PostContent from "./postContent";
import PostActions from "./Comments/PostComment";

function Post({ post, onCommentClick, onSelectpostList, SelectedPostList }) {
  return (
    <div className="bg-white shadow-md rounded-lg border mb-4 ">
      <TopOfPost
        onSelectpostList={onSelectpostList}
        SelectedPostList={SelectedPostList}
      />

      <PostContent
        postId={post.id}
        text={post.title}
        image={post.media}
        onCommentClick={onCommentClick}
      />

      <PostActions postId={post.id} />
    </div>
  );
}

export default Post;