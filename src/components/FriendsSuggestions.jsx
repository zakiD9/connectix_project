import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";
import NoBgButton from "./nobgbutton";
import AddFollowPlus from "./AddFollowPlus";

export default function FriendsSuggestion(){
     const { fetchUsers,users} = useUserStore();
 useEffect(()=>{
  fetchUsers();
 },[fetchUsers])
     const navigate = useNavigate();
    return(
        <div className="px-6 pt-2 pb-4 flex-1  overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold  text-gray-800">Friend Suggestions</span>
        <NoBgButton>See All</NoBgButton>
       </div>
       <div className="divide-y">
        {users.map((user, idx) => (
          <div key={idx} className="flex items-center py-3">
            <img src={user.profileImage} alt={user.firstName} className="w-9 h-9 rounded-full mr-3" />
            <div onClick={() => navigate(`/profile/${user.id}`)}  className='flex-1 cursor-pointer'>
              <div  className="font-medium text-gray-800 text-sm">{user.firstName} {user.lastName}</div>
              <div className="text-xs text-gray-500">@{user.userName}</div>
            </div>
            <AddFollowPlus />
            <div>

              </div>
          </div>
        ))}
      </div>
    </div>
    )
}