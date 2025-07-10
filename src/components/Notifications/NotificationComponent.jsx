import { useState, useRef, useEffect } from "react";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NoBgButton from "../nobgbutton";
import NotificationCard from "./NotifCard";
import { motion, AnimatePresence } from "framer-motion";


const NotificationDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

   const tabs = [
    { id: "all", label: "View all" },
    { id: "mentions", label: "Mentions" },
    { id: "unread", label: "Unread (2)" },
  ];
  return (
    <div className="relative">
      <button title="Notifications" onClick={() => setOpen(!open)} >
        <BellIcon className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors" />

        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
      </button>
<AnimatePresence>
      {open && (
        <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 mt-2 w-[450px] max-h-[500px] bg-white rounded-xl shadow-xl border z-50 overflow-y-auto"
    >

          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h3 className="text-base font-semibold">Notification</h3>
            <XMarkIcon
              onClick={() => setOpen(false)}
              className="w-5 h-5 text-gray-500 cursor-pointer"
            />
          </div>

          <div className="flex justify-between px-4 py-2 text-sm text-gray-500">
            <div className="space-x-1 bg-gray-100 p-1 rounded-lg">
              {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`relative z-10 px-3 py-1 rounded font-medium transition-colors duration-200 ${
            activeTab === tab.id ? "text-black bg-white" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
            </div>
           <NoBgButton children="mark as read"/>
          </div>
          <div className="divide-y">
            {[1,2,3].map((notification)=>(<NotificationCard key={notification} />))}

          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationDropdown;
