import { useEffect, useState } from "react";
import SideBar from "../../components/layout/SideBar";
import SideBarMenu from "../../components/layout/sideBarinfo";
import NavBar from "../../components/layout/navBar";
import RightSideBar from "../../components/layout/RightSideBar";
import Post from "../../components/post/post";
import MakePost from "../../components/post/createpost";
import { usePostStore } from "../../store/postStore";
import { useAppNavigation } from "../../store/navigationApp";
import ProfileComp from "../../components/Profilecomp";
import { useCommentStore } from "../../store/commentStore";
import CommentPopup from "../../components/post/PostDetails";
import PostDetailsPopup from "../../components/post/PostDetails";
import SearchComp from "../search/searchPage";

function Feed () {
  const {fetchPosts,posts,activeMenu,onMenuSelect,selectedPost, setSelectedPost} = usePostStore();
  const openCommentModal = useCommentStore((state) => state.openCommentModal);
  const [selectedPostList,setSelectedPostList]=useState(null);
  
  console.log("the id of selected post:",selectedPost);
  const {navigateTo}=useAppNavigation();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleMenuSelect = (menu) => {
    onMenuSelect(menu);    
    navigateTo(menu);      
  };
  console.log(posts);
  console.log("list:",selectedPostList);
  return (
    <div className="relative min-h-screen bg-[#F8FAFC]">
      {/* Fixed Sidebars */}
      <SideBar activeMenu={activeMenu} onMenuSelect={handleMenuSelect} />
      <SideBarMenu activeMenu={activeMenu} onMenuSelect={handleMenuSelect} />
      <RightSideBar variant={"feed"} />
      {/* <SearchComp /> */}
      {/* Main Content */}
      <div className="ml-[20rem] mr-[20rem]">
        <NavBar/>
          <div className="flex-1 flex-col justify-center items-start px-5 py-4">
            <div className="w-full mb-4">
              <MakePost />
              
            </div>
            {(posts || []).map((post) => (
              <Post key={post.id} post={post} onCommentClick={() => {
    setSelectedPost(post.id); 
    openCommentModal();       
  }} onSelectpostList={()=>setSelectedPostList(post.id)} SelectedPostList={selectedPostList} />
            ))}
          </div>
      </div>
      {selectedPost && (
  <PostDetailsPopup
  />
)}
    </div>
  );
}

export default Feed;  