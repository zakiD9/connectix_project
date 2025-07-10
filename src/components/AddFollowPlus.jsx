import { useState } from "react";
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function AddFollowPlus({ followed = false, onToggle }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onToggle) onToggle();
    setTimeout(() => setClicked(false), 200); // Reset animation
  };

  return (
    <button
      onClick={handleClick}
      title={followed ? "Unfollow" : "Follow"}
      className={`transition-transform duration-200 rounded focus:outline-none ${
        clicked ? "scale-110" : ""
      }`}
    >
      {followed ? (
        <XMarkIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
      ) : (
        <PlusIcon className="w-6 h-6 text-gray-400 hover:text-primary-dark" />
      )}
    </button>
  );
}
