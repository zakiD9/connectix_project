import { HomeIcon, UserGroupIcon, ChatBubbleLeftEllipsisIcon, QuestionMarkCircleIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import LogOut from '../LogOutButton';
import { motion } from "framer-motion";

const SideBar = ({ activeMenu, onMenuSelect }) => {
  return (
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="fixed md:left-0 md:top-0 z-30 bottom-0 w-full h-16 md:h-screen md:w-20 flex md:flex-col border-t-2 md:border-r-2 bg-white"
>

      <div className="flex w-full items-center justify-around md:flex-col md:pt-16 md:space-y-4">
        <div
           className={`transition-all duration-300 ease-in-out flex items-center justify-center w-12 h-12 cursor-pointer ${
    activeMenu === 'feed' ? 'bg-blue-50 scale-105' : 'hover:bg-gray-100'
  } rounded-xl`}
          onClick={() => onMenuSelect('feed')}
        >
          <HomeIcon
            className={`w-7 h-7 transition-colors duration-200 ${
      activeMenu === 'feed' ? 'text-primary' : 'text-gray-400'
    }`}
          />
        </div>
        <div
          className={`transition-all duration-300 ease-in-out flex items-center justify-center w-12 h-12 cursor-pointer ${
    activeMenu === 'messages' ? 'bg-blue-50 scale-105' : 'hover:bg-gray-100'
  } rounded-xl`}
          onClick={() => onMenuSelect('messages')}
        >
          <EnvelopeIcon
              className={`w-7 h-7 transition-colors duration-200 ${
      activeMenu === 'messages' ? 'text-primary' : 'text-gray-400'
    }`}
            />
        </div>
        <div
           className={`transition-all duration-300 ease-in-out flex items-center justify-center w-12 h-12 cursor-pointer ${
    activeMenu === 'profile' ? 'bg-blue-50 scale-105' : 'hover:bg-gray-100'
  } rounded-xl`}
          onClick={() => onMenuSelect('profile')}
        >
          <UserIcon
              className={`w-7 h-7 transition-colors duration-200 ${
      activeMenu === 'profile' ? 'text-primary' : 'text-gray-400'
    }`}
            />
        </div>
        <div
           className={`transition-all duration-300 ease-in-out flex items-center justify-center w-12 h-12 cursor-pointer ${
    activeMenu === 'Support' ? 'bg-blue-50 scale-105' : 'hover:bg-gray-100'
  } rounded-xl`}
          onClick={() => onMenuSelect('Support')}
        >
          <QuestionMarkCircleIcon
              className={`w-7 h-7 transition-colors duration-200 ${
      activeMenu === 'Support' ? 'text-primary' : 'text-gray-400'
    }`}
            />
        </div>
      </div>
      {/* Spacer */}
      <div className="flex-1"></div>
      {/* Bottom user section */}
      <div className=" flex-col hidden md:flex items-center pb-4 space-y-3">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-8 h-8 rounded-full mb-1 "
        />
        <LogOut />
      </div>
    </motion.div>
  );
};

export default SideBar;