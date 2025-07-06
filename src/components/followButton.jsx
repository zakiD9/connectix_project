import { useState } from "react";
import { follow, unfollow } from "../services/userService";

const FollowButton = ({ userId, isFollowingInitial = false, onChange }) => {
  const [isFollowing, setIsFollowing] = useState(isFollowingInitial);
  const [loading, setLoading] = useState(false);

  const toggleFollow = async () => {
    try {
      setLoading(true);
      if (isFollowing) {
        await unfollow(userId);
        setIsFollowing(false);
        onChange?.(false);
      } else {
        await follow(userId);
        setIsFollowing(true);
        onChange?.(true);
      }
    } catch (err) {
      console.error("Follow error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleFollow}
      disabled={loading}
      className={`text-xs px-3 py-1 rounded ${
        isFollowing ? "bg-gray-300 text-gray-700" : "bg-blue-500 text-white"
      }`}
    >
      {loading ? "..." : isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
