import { useNavigate } from "react-router-dom";
import AddFollowPlus from "./AddFollowPlus";

export default function UserComponent({user}){
    const navigate = useNavigate();
    return(
        <div className="flex items-center py-3">
                    <img src={user.profileImage} alt={user.firstName} className="w-9 h-9 rounded-full mr-3" />
                    <div onClick={() => navigate(`/profile/${user.id}`)}  className='flex-1 cursor-pointer'>
                      <div  className="font-medium text-gray-800 text-sm">{user.firstName} {user.lastName}</div>
                      <div className="text-xs text-gray-500">@{user.userName}</div>
                    </div>
                    <AddFollowPlus />
                    <div>
        
                      </div>
                  </div>
    )
}