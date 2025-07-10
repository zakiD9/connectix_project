import {
  HomeIcon,
  UserIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Span from "../span";
import LogOut from "../LogOutButton";

const SideBarMenu = ({ activeMenu, onMenuSelect }) => {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed left-0 top-0 z-20 h-screen w-80 px-1 bg-white border-r flex flex-col justify-between"
    >
      {/* Menu items */}
      <div className="pt-16">
        {/* Reusable menu item */}
        {[
          { key: "feed", label: "Feed", Icon: HomeIcon, badge: 10 },
          { key: "messages", label: "Messages", Icon: EnvelopeIcon, badge: 2 },
          { key: "profile", label: "Profile", Icon: UserIcon },
          { key: "Support", label: "Help & Support", Icon: QuestionMarkCircleIcon },
        ].map(({ key, label, Icon, badge }) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.01 }}
            className={`transition-all duration-200 flex items-center px-6 py-4 cursor-pointer hover:bg-blue-50 rounded-lg mb-1 ${
              activeMenu === key ? "bg-blue-50 text-primary font-semibold" : ""
            }`}
            onClick={() => onMenuSelect(key)}
          >
            <span className="mr-3">
              <Icon
                className={`w-7 h-7 transition-colors ${
                  activeMenu === key ? "text-primary" : "text-gray-500"
                }`}
              />
            </span>
            <span className="flex-1">{label}</span>
            {badge !== undefined && <Span>{badge}</Span>}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center px-6 py-4 border-t">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-8 h-8 rounded-full mr-3"
        />
        <span className="flex-1 text-gray-800">Azunyan U. Wu</span>
        <LogOut />
      </div>
    </motion.div>
  );
};

export default SideBarMenu;
