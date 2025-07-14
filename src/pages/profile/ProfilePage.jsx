import SideBar from "../../components/layout/SideBar";
import SideBarMenu from "../../components/layout/sideBarinfo";
import RightSideBar from "../../components/layout/rightSideBar";
import ProfileComp from "../../components/Profilecomp";
import MakePost from "../../components/post/createpost";
import Post from "../../components/post/post";
import NavBar from "../../components/layout/navBar";
import { useAppNavigation } from "../../store/navigationApp";
import { usePostStore } from "../../store/postStore";
import { useEffect, useState } from "react";
import { getMe, getUserInfoById } from "../../services/userService";
import { useUserStore } from "../../store/userStore";
import UpdateEmailDialog from "../../components/updateEmail";
import { getMyPosts, getUserPosts } from "../../services/postService";
import { useParams } from "react-router-dom";
import { useSearchStore } from "../../store/searchStore";
import SearchComponent from "../../components/SearchComponent";

function ProfilePage() {
  const { onMenuSelect,setSelectedPost } = usePostStore();
  const setUser = useUserStore((state) => state.setUser);
const setProfileUser = useUserStore((state) => state.setProfileUser);
  const [selectedPostList,setSelectedPostList]=useState(null);
  const { navigateTo } = useAppNavigation();
  const showEmailDialog = useUserStore((state) => state.showEmailDialog);
const setShowEmailDialog = useUserStore((state) => state.setShowEmailDialog);
const [posts,setPosts]=useState(null);
const [isMyprofile,setIsMyprofile]=useState(true);
const{results}=useSearchStore();

const{id}=useParams();

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const me = await getMe();
      setUser(me);
      if (id && id !== me.id) {
        const user = await getUserInfoById(id);
        console.log("user1:",user);
        setProfileUser(user);
        setIsMyprofile(false);
      } else {
        setProfileUser(me); 
        setIsMyprofile(true);
      }
    } catch (error) {
      console.error("Failed to fetch profile", error);
    }
  };
  fetchProfile();
}, [id]);

  const handleMenuSelect = (menu) => {
    onMenuSelect(menu);
    navigateTo(menu);
  };
 useEffect(()=>{
  const fetchPosts=async ()=>{
     try {
    let response;
    if (id) {
      const userId=id;
      response = await getUserPosts(userId);
      console.log("user posts:",response);
    } else {
      response = await getMyPosts();
      console.log("Myposts:",response);
    }
    setPosts(response);
  } catch (err) {
    console.log(err);
  }
};
  fetchPosts();
 },[id])
  return (
    <div className="relative min-h-screen bg-[#F8FAFC]">
      <SideBarMenu activeMenu={"profile"} onMenuSelect={handleMenuSelect} />
    <RightSideBar isMyProfile={isMyprofile} setdialogvariant={setShowEmailDialog} variant={"profile"} />
      <div className="ml-[20rem] mr-[20rem]">
        <NavBar />
        {results.length>0 ? (<SearchComponent />) : (<div className="flex-1 flex-col justify-center items-start px-5 py-4">
          <ProfileComp isMyProfile={isMyprofile} /> {/* ProfileComp will get user from store */}
            {isMyprofile && (<div className="w-full mb-4"><MakePost /></div>)}
          {(posts || []).map((post) => (
            <Post key={post.id} post={post} onCommentClick={()=>{setSelectedPost(post.id)}} onSelectpostList={()=>setSelectedPostList(post.id)} SelectedPostList={selectedPostList} />
          ))}
        </div>)}
        <div className="flex justify-end w-full mb-4">

</div>

      </div>
      <UpdateEmailDialog
  open={showEmailDialog}
  onOpenChange={setShowEmailDialog}
/>
    </div>

  );
}

export default ProfilePage;