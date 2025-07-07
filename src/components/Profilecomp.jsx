import { useRef, useState, useEffect } from "react";
import { updateProfileImage as apiUpdateProfileImage } from "../services/userService";
import UpdateBioPopup from "./updateProfilebio";
import { useUserStore } from "../store/userStore";
import FollowersDialog from "./followersListModal";

const ProfileComp = ({isMyProfile}) => {
  console.log("ismyprofile?:",isMyProfile)
  const { updateProfileImage, updateBio } = useUserStore();
  const profileUser = useUserStore((state) => state.profileUser);

  const showBioDialog = useUserStore((state) => state.showBioDialog);
  const [isFollowersDialogOpen, setIsFollowersDialogOpen] = useState(false);
  const setshowBioDialog = useUserStore((state)=>state.setshowBioDialog);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const fileInputRef = useRef(null);
   const[followorfollowing,setfolloworfollowing]=useState('');
   const [type, setType] = useState("followers");


  // Keep about in sync with user.bio
  const [about, setAbout] = useState(profileUser?.bio || "");
  useEffect(() => {
    setAbout(profileUser?.bio || "");
  }, [profileUser?.bio]);

console.log("user:",profileUser);
  if (!profileUser) return null;

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await apiUpdateProfileImage(file); // get new image URL from API
      updateProfileImage(imageUrl); // update in store
    }
  };
  return (
    <div className="p-6 max-w-xl mx-auto">
      <FollowersDialog
  open={isFollowersDialogOpen}
  onOpenChange={setIsFollowersDialogOpen}
  list={followorfollowing}
  type={type}
/>
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={profileUser.profileImage}
            alt={profileUser.firstName}
            className="w-24 h-24 rounded-full border-4 border-white shadow"
          />
          {isMyProfile && (<><input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <span
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="absolute bottom-0 right-0 p-1 rounded-full cursor-pointer"
          >
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5l-4 1 1-4L16.5 3.5Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </span>
          </>) }
          
        </div>
        <div className="mt-2 text-center">
          <div className="text-xl font-bold">{profileUser.firstName} {profileUser.lastName}</div>
          <div className="text-gray-500">@{profileUser.userName}</div>
        </div>
        <div className="flex justify-center gap-10 mt-4 w-full">
          <div  className="text-center">
            <div className="font-bold text-lg">posts</div>
            <div className="text-xs text-gray-500">Posts</div>
          </div>
          <div onClick={()=>{
            setfolloworfollowing("Followers List");
            setType("followers");
            setIsFollowersDialogOpen(true);}} className="text-center cursor-pointer">
            <div className="font-bold text-lg">400</div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
          <div onClick={()=>{
            setfolloworfollowing("Following List");
             setType("following");
            setIsFollowersDialogOpen(true);}}  className="text-center cursor-pointer">
            <div className="font-bold text-lg">140</div>
            <div className="text-xs text-gray-500">Following</div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="font-semibold">About Me</span>
          {isMyProfile &&(<button onClick={() => setshowBioDialog(true)} className="text-gray-400 hover:text-blue-500 p-1 rounded">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 20h9" strokeLinecap="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5l-4 1 1-4L16.5 3.5Z"/>
            </svg>
          </button>)}
        </div>
        <div className="text-gray-700 text-sm">
          {showFullAbout
            ? about
            : about.slice(0, 100) + (about.length > 100 ? "..." : "")}
        </div>
        {about.length > 100 && !showFullAbout && (
          <button
            className="text-blue-500 text-xs mt-1 hover:underline"
            onClick={() => setShowFullAbout(true)}
          >
            Read More
          </button>
        )}
      </div>
      {showBioDialog && (
        <UpdateBioPopup
          open={showBioDialog}
  onOpenChange={setshowBioDialog}
  currentBio={profileUser.bio}
          onSave={(newBio) => {
            setAbout(newBio);
            updateBio(newBio);
          }}
          onClose={() => setshowBioDialog(false)}
        />
      )}
    </div>
  );
};

export default ProfileComp;