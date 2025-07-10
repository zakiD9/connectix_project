import { ChatBubbleLeftEllipsisIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "lucide-react";
import ListMenu from "./PostMenuList";
import { useNavigate } from "react-router-dom";
import NotificationDropdown from "./Notifications/NotificationComponent";

export default function UserBar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="User avatar"
        title="Your profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => navigate("/profile")}
      />

      <div className="flex gap-4 items-center">
        <NotificationDropdown />
        <ChatBubbleLeftEllipsisIcon
          title="Messages"
          className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors"
        />
        <Cog6ToothIcon
          title="Settings"
          onClick={() => navigate("/Settings")}
          className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors"
        />
      </div>
    </div>
  );
}
