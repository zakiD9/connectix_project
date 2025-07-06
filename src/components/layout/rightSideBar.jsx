import { BellIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import NoBgButton from '../nobgbutton';
import FollowingList from '../FollowingList';
import ContactInformations from '../ContactInformation';
import UserBar from '../UserBar';
import FriendsSuggestion from '../FriendsSuggestions';
import MenuList from '../MenuList';
const RightSideBar = ({variant,isMyprofile}) => {



// if (variant === 'messages') {
//   return (
//     <aside className="fixed right-0 top-0 z-20 h-screen w-80 bg-white flex flex-col border-l border-gray-200">
//       <div className="p-4">
//         <div className="font-semibold text-lg mb-4 text-gray-800">Chats</div>
//         <div className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-100px)]">
//           {[].map((user, idx) => (
//             <div
//   key={idx}
//   onClick={() => setSelectedUser(user)}
//   className={`flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded ${selectedUser?.id === user.id ? 'bg-gray-100' : ''}`}
// >

//               <img src={user.profileImage} alt={user.firstName} className="w-10 h-10 rounded-full mr-3" />
//               <div>
//                 <div className="font-medium text-gray-800 text-sm">{user.firstName} {user.lastName}</div>
//                 <div className="text-xs text-gray-500">@{user.userName}</div>
//                 <div className="text-xs text-gray-500" >lastmessage..........</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// }

if (variant === 'profile') {
  return (
    <aside className="fixed right-0 top-0 z-20 h-screen w-80 bg-white flex flex-col border-l border-gray-200">
       <UserBar/>
      <ContactInformations isMyprofile={isMyprofile}/>
      <FollowingList />
      <div className="h-6" />
    </aside>
  );
}

  return (
  <aside className="fixed right-0 top-0 z-20 h-screen w-80 w-80 bg-white h-screen flex flex-col border-l border-gray-200">
    <UserBar />
    <FriendsSuggestion />
    <MenuList/>
  </aside>
  )
};

export default RightSideBar;