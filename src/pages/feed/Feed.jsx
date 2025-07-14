import { useEffect, useState } from "react";
import SideBarMenu from "../../components/layout/SideBarinfo";
import NavBar from "../../components/layout/navBar";
import RightSideBar from "../../components/layout/RightSideBar";
import Post from "../../components/post/post";
import MakePost from "../../components/post/createpost";
import { usePostStore } from "../../store/postStore";
import { useAppNavigation } from "../../store/navigationApp";
import { useCommentStore } from "../../store/commentStore";
import PostDetailsPopup from "../../components/post/PostDetails";
import { useSearchStore } from "../../store/searchStore";
import SearchComponent from "../../components/SearchComponent";

function Feed() {
  const {
    fetchPosts,
    posts,
    activeMenu,
    onMenuSelect,
    selectedPost,
    setSelectedPost,
  } = usePostStore();

  const openCommentModal = useCommentStore((state) => state.openCommentModal);
  const { results } = useSearchStore();
  const { navigateTo } = useAppNavigation();
  const [selectedPostList, setSelectedPostList] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleMenuSelect = (menu) => {
    onMenuSelect(menu);
    navigateTo(menu);
  };

  const handleSelectPostList = (postId) => {
    setSelectedPostList(postId);
  };

  const handleCommentClick = (postId) => {
    setSelectedPost(postId);
    openCommentModal();
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC]">
      <SideBarMenu activeMenu={activeMenu} onMenuSelect={handleMenuSelect} />
      <RightSideBar variant="feed" />

      <div className="ml-[20rem] mr-[20rem]">
        <NavBar />

        {results.length > 0 ? (
          <SearchComponent />
        ) : (
          <div className="flex-1 flex-col justify-center items-start px-5 py-4">
            <div className="w-full mb-4">
              <MakePost />
            </div>

            {(posts || []).map((post) => (
              <Post
                key={post.id}
                post={post}
                onCommentClick={() => handleCommentClick(post.id)}
                onSelectpostList={() => handleSelectPostList(post.id)}
                SelectedPostList={selectedPostList}
              />
            ))}
          </div>
        )}
      </div>

      {selectedPost && <PostDetailsPopup />}
    </div>
  );
}

export default Feed;
