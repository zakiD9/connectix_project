import FollowingList from '../FollowingList';
import ContactInformations from '../ContactInformation';
import UserBar from '../UserBar';
import FriendsSuggestion from '../FriendsSuggestions';
const RightSideBar = ({variant,isMyProfile}) => {

if (variant === 'profile') {
  return (
    <aside className="fixed right-0 top-0 z-20 h-screen w-80 bg-white flex flex-col border-l border-gray-200">
       <UserBar/>
      <ContactInformations isMyProfile={isMyProfile}/>
      <FollowingList />
      <div className="h-6" />
    </aside>
  );
}

  return (
  <aside className="fixed right-0 top-0 h-screen w-80  bg-white flex flex-col border-l border-gray-200">
    <UserBar />
    <FriendsSuggestion />
  </aside>
  )
};

export default RightSideBar;