import AddFollowPlus from "./AddFollowPlus";
import { useState } from "react";

export default function FollowingList() {
  const [followedList, setFollowedList] = useState([]);

  const users = [
    { name: "Julia Smith", username: "@juliasmith", avatar: "https://randomuser.me/api/portraits/women/47.jpg" },
    { name: "Vermillion D. Gray", username: "@vermilliongray", avatar: "https://randomuser.me/api/portraits/men/48.jpg" },
    { name: "Mai Senpai", username: "@maisenpai", avatar: "https://randomuser.me/api/portraits/men/49.jpg" },
    { name: "Saylor D. Twitt", username: "@sailortwitt", avatar: "https://randomuser.me/api/portraits/women/50.jpg" },
    { name: "Azunyan U. Wu", username: "@azunyandsu", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Oarack Babama", username: "@obama21", avatar: "https://randomuser.me/api/portraits/men/51.jpg" },
    // repeated for testing scroll
    { name: "Julia Smith", username: "@juliasmith", avatar: "https://randomuser.me/api/portraits/women/47.jpg" },
    { name: "Julia Smith", username: "@juliasmith", avatar: "https://randomuser.me/api/portraits/women/47.jpg" },
    { name: "Julia Smith", username: "@juliasmith", avatar: "https://randomuser.me/api/portraits/women/47.jpg" },
    { name: "Julia Smith", username: "@juliasmith", avatar: "https://randomuser.me/api/portraits/women/47.jpg" },
  ];

  const toggleFollow = (username) => {
    setFollowedList((prev) =>
      prev.includes(username)
        ? prev.filter((u) => u !== username)
        : [...prev, username]
    );
  };

  return (
    <div className="px-4 pb-4 flex-1 overflow-y-auto">
      <div className="font-semibold text-gray-800 mb-2">Following</div>
      <div className="flex flex-col gap-1">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="flex items-center py-2 px-2 border-b last:border-b-0 transition-all duration-200 hover:bg-gray-50 rounded-md"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-800 text-sm">
                {user.name}
              </div>
              <div className="text-xs text-gray-500">{user.username}</div>
            </div>
            <AddFollowPlus
              followed={followedList.includes(user.username)}
              onClick={() => toggleFollow(user.username)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
