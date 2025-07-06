import { ChatBubbleLeftEllipsisIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "lucide-react";
import ListMenu from "./PostMenuList";

export default function UserBar(){
    return(
        <div className="flex items-center justify-between px-6 py-4">
      <div className="relative">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="User"
          className="w-10 h-10 rounded-full"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
      </div>
      <div className="flex gap-4">
        <BellIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
        <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
        <Cog6ToothIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
      </div>
    </div>
    )
}