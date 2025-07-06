// FollowersDialog.js
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { getMyFollowers, getMyFollowing } from '../services/userService';

export default function FollowersDialog({ open, onOpenChange, list, type = "followers" }) {
  const isFollowers = type === "followers";

  const[users,setUsers]=useState([]);
    useEffect(() => {
  async function fetchFollowers() {
    try {
      const response = isFollowers ? await getMyFollowers() : await getMyFollowing();
      console.log("followers or following :",response[0]);
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  }

  if (open) {
    fetchFollowers();
  }
}, [isFollowers, open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-40" />
        <Dialog.Content className="fixed z-50 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-[90vw] max-w-md focus:outline-none">
          <Dialog.Title className="text-lg font-bold mb-4">{list}</Dialog.Title>

          <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto">
            {/* Example users */}
            {(users || [...Array(5)]).map((user, idx) => (
              <div key={idx} className="flex items-center border-b p-2 justify-between">
                <div className="flex items-center gap-2">
                  <img src={user.profileImage} className="w-8 h-8 rounded-full" />
                  <div className="text-sm text-gray-800">{user.userName}</div>
                </div>

                <button
                  onClick={() => {
                    if (isFollowers) {
                      console.log("Remove follower");
                    } else {
                      console.log("Unfollow user");
                    }
                  }}
                  className="text-gray-400 hover:text-red-500"
                  title={isFollowers ? "Remove" : "Unfollow"}
                >
                  {/* Heroicons X icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
