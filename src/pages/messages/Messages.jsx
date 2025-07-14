import SideBar from "../../components/layout/SideBar";
import { usePostStore } from "../../store/postStore";
import { useAppNavigation } from "../../store/navigationApp";
import ChatList from "../../components/messages/MessagesList/ChatList";
import MessageSection from "../../components/messages/MessageSection/MessageSection";
import { useState } from "react";
import UserInfoChatDialog from "../../components/UserChatInfoDialog";
import NavBar from "../../components/layout/navBar";

const MessagesPage = () => {
const [showUserChatDetails,setShowUserChatDetails]=useState(false);
console.log(showUserChatDetails)
  const{onMenuSelect}=usePostStore();
   const {navigateTo}=useAppNavigation();
const handleMenuSelect = (menu) => {
    onMenuSelect(menu);
    navigateTo(menu);
  };
  return (
    <div className="sticky min-h-screen bg-[#F8FAFC] w-full">
      <SideBar activeMenu="messages" onMenuSelect={handleMenuSelect} />
      <div className="ml-20">
        <NavBar />
        </div>
      
      <div className="ml-20 flex mt-3">
        <ChatList />
        <MessageSection setShowUserChatDetails={setShowUserChatDetails}/>
      </div>
      <UserInfoChatDialog isOpen={showUserChatDetails} onClose={()=>setShowUserChatDetails(false)} />
    </div>
  );
};

export default MessagesPage;
