import {
  ArrowRightOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";
import Span from "../span";
import { Navigate, useNavigate } from "react-router-dom";


const SideBarMenu = ({ activeMenu, onMenuSelect }) => {
  const navigate = useNavigate();
  const LogOut = ()=>{
    localStorage.setItem('token',null);
    navigate(`/Login`);
  }
  return (
    <div className="fixed left-0 top-0 z-20 h-screen  w-80 px-1 bg-white border-r flex flex-col justify-between">
      <div className="pt-16 ">
        {/* Feed */}
        <div
          className={`flex items-center px-6 py-4 cursor-pointer hover:bg-blue-50 rounded-lg mb-1 ${
            activeMenu === "feed" ? "bg-blue-50 text-primary font-semibold" : ""
          }`}
          onClick={() => onMenuSelect("feed")}
        >
          <span className="mr-3">
            <HomeIcon
              className={`w-7 h-7 ${
                activeMenu === "feed"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            />
          </span>
          <span className="flex-1">Feed</span>
          <Span>10</Span>
        </div>
        {/* Followers */}
        {/* Messages */}
        <div
          className={`flex items-center px-6 py-4 cursor-pointer hover:bg-blue-50 rounded-lg mb-1 ${
            activeMenu === "messages" ? "bg-blue-50 text-primary font-semibold" : ""
          }`}
          onClick={() => onMenuSelect("messages")}
        >
          <span className="mr-3 relative">
            <EnvelopeIcon
              className={`w-7 h-7 ${
                activeMenu === "messages"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            />
            {/* Notification badge */}
            
          </span>
          <span className="flex-1">Messages</span>
          <Span>2</Span>
        </div>
        {/* Profile */}
        <div
          className={`flex items-center px-6 py-4 cursor-pointer hover:bg-blue-50 rounded-lg mb-1 ${
            activeMenu === "profile" ? "bg-blue-50 text-primary font-semibold" : ""
          }`}
          onClick={() => onMenuSelect("profile")}
        >
          <span className="mr-3">
            <UserIcon
              className={`w-7 h-7 ${
                activeMenu === "profile"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            />
          </span>
          <span className="flex-1">Profile</span>
        </div>
        {/* Help & Support */}
        <div
          className={`flex items-center px-6 py-4 cursor-pointer hover:bg-blue-50 rounded-lg ${
            activeMenu === "help" ? "bg-blue-50 text-primary font-semibold" : ""
          }`}
          onClick={() => onMenuSelect("help")}
        >
          <span className="mr-3">
            <QuestionMarkCircleIcon
              className={`w-7 h-7 ${
                activeMenu === "help"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            />
          </span>
          <span className="flex-1">Help & Support</span>
        </div>
      </div>
      <div className="flex items-center px-6 py-4 border-t ">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-8 h-8 rounded-full mr-3"
        />
        <span className="flex-1 text-gray-800">Azunyan U. Wu</span>
        <button onClick={LogOut}>
        <ArrowRightOnRectangleIcon className="w-6 h-6 text-black opacity-70 hover:opacity-100 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default SideBarMenu;