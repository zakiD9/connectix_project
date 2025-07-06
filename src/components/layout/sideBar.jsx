import { HomeIcon, UserGroupIcon, ChatBubbleLeftEllipsisIcon, QuestionMarkCircleIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const SideBar = ({ activeMenu, onMenuSelect }) => {
  return (
    <div className="fixed left-0 top-0 z-30 h-screen w-20 flex flex-col h-screen border-r-2 w-20 bg-white">
      {/* Top icons */}
      <div className="flex flex-col items-center pt-16 space-y-4 flex-shrink-0">
        {/* Feed */}
        <div
          className={`flex items-center justify-center w-12 h-12 cursor-pointer ${
            activeMenu === 'feed' ? 'bg-blue-50' : ''
          } rounded-xl`}
          onClick={() => onMenuSelect('feed')}
        >
          <HomeIcon
            className={`w-7 h-7 ${
              activeMenu === 'feed' ? 'text-primary' : 'text-gray-400'
            }`}
          />
        </div>
        {/* Friends */}
        <div
          className={`flex items-center justify-center w-12 h-12 cursor-pointer ${
            activeMenu === 'followers' ? 'bg-blue-50' : ''
          } rounded-xl`}
          onClick={() => onMenuSelect('followers')}
        >
          <UserGroupIcon
            className={`w-7 h-7 ${
              activeMenu === 'followers' ? 'text-primary' : 'text-gray-400'
            }`}
          />
        </div>
        {/* Messages */}
        <div
          className={`flex items-center justify-center w-12 h-12 cursor-pointer ${
            activeMenu === 'messages' ? 'bg-blue-50' : ''
          } rounded-xl`}
          onClick={() => onMenuSelect('messages')}
        >
          <EnvelopeIcon
              className={`w-7 h-7 ${
                activeMenu === "messages"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            />
        </div>
        <div
          className={`flex items-center justify-center w-12 h-12 cursor-pointer ${
            activeMenu === 'profile' ? 'bg-blue-50' : ''
          } rounded-xl`}
          onClick={() => onMenuSelect('profile')}
        >
          <UserIcon
              className={`w-7 h-7 ${
                activeMenu === "profile"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            />
        </div>
        <div
          className={`flex items-center justify-center w-12 h-12 cursor-pointer ${
            activeMenu === 'help' ? 'bg-blue-50' : ''
          } rounded-xl`}
          onClick={() => onMenuSelect('help')}
        >
          <QuestionMarkCircleIcon
              className={`w-7 h-7 ${
                activeMenu === "help"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            />
        </div>
      </div>
      {/* Spacer */}
      <div className="flex-1"></div>
      {/* Bottom user section */}
      <div className="flex flex-col items-center pb-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-8 h-8 rounded-full mb-1"
        />
      </div>
    </div>
  );
};

export default SideBar;