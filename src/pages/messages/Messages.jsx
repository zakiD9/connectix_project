import SideBar from "../../components/layout/SideBar";
import SideBarMenu from "../../components/layout/sideBarinfo";
import RightSideBar from "../../components/layout/RightSideBar";
import NavBar from "../../components/layout/navBar";
import { useUserStore } from "../../store/userStore";
import { useEffect, useState } from "react";
import ChatComponent from "../../components/ChatComponent"; // Move it to its own file if needed
import { usePostStore } from "../../store/postStore";
import { useAppNavigation } from "../../store/navigationApp";

const MessagesPage = () => {
  const { fetchUsers } = useUserStore();
  const{onMenuSelect}=usePostStore();
  const [selectedUser, setSelectedUser] = useState(null);

   const {navigateTo}=useAppNavigation();
const handleMenuSelect = (menu) => {
    onMenuSelect(menu);
    navigateTo(menu);
  };
  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC]">
      {/* Fixed Layouts */}
      <SideBar activeMenu="messages" onMenuSelect={handleMenuSelect} />
      <SideBarMenu activeMenu="messages" onMenuSelect={handleMenuSelect} />
      <RightSideBar variant="messages" selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

      {/* Main Chat Section */}
      <div className="ml-[20rem] mr-[20rem] px-4">
        <NavBar />
        <div className="mt-4">
          {selectedUser ? (
            <div className="bg-white border rounded shadow-md h-[75vh]">
              <ChatComponent selectedUser={selectedUser} />
            </div>
          ) : (
            <div className="text-gray-500 text-center mt-20">
              Select a user from the right to start chatting.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
