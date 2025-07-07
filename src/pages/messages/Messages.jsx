import SideBar from "../../components/layout/SideBar";
import SideBarMenu from "../../components/layout/sideBarinfo";
import RightSideBar from "../../components/layout/RightSideBar";

import ChatComponent from "../../components/ChatComponent"; // Move it to its own file if needed
import { usePostStore } from "../../store/postStore";
import { useAppNavigation } from "../../store/navigationApp";
import ChatList from "../../components/messages/MessagesList/ChatList";
import MessageSection from "../../components/messages/MessageSection/MessageSection";
import { useState } from "react";

const MessagesPage = () => {
const[selectedChat,setSelectedChat]=useState(null);

  const{onMenuSelect}=usePostStore();
   const {navigateTo}=useAppNavigation();
const handleMenuSelect = (menu) => {
    onMenuSelect(menu);
    navigateTo(menu);
  };
  return (
    <div className="sticky min-h-screen bg-[#F8FAFC] w-full">
      <SideBar activeMenu="messages" onMenuSelect={handleMenuSelect} />
      <div className="ml-20 flex mt-3">
        <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
        <MessageSection selectedChat={selectedChat}/>
      </div>
    </div>
  );
};

export default MessagesPage;
