import { useUserStore } from "../store/userStore";
import { useEffect } from "react";
import NoBgButton from "./nobgbutton";
import UserComponent from "./UserComponent";

export default function FriendsSuggestion() {
  const { fetchUsers, users } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="px-6 pt-2 pb-4 flex-1 overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-gray-800">Friend Suggestions</span>
        <NoBgButton>See All</NoBgButton>
      </div>

      <div className="divide-y animate-fadeIn">
        {users.length === 0 ? (
          <div className="text-sm text-gray-500 py-4">No suggestions available.</div>
        ) : (
          users.map((user) => (
            <UserComponent key={user.id} user={user} />
          ))
        )}
      </div>
    </div>
  );
}
