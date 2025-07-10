



export default function UserChatComp({ isSelected, onClick, chat={ name:'zaki', lastMessage:'hhhhh...', time:'10:00', unreadCount:2, avatar:'ZA' } }) {
  const { name, lastMessage, time, unreadCount, avatar } = chat;

  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center my-2 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-150
        ${isSelected ? "bg-blue-100" : "hover:bg-blue-50"}`}
    >
      <div className="flex items-center">
        <img
          src={avatar || "https://ui-avatars.com/api/?name=User"}
          alt={name}
          className="w-10 h-10 rounded-full mr-3 object-cover border"
        />
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold text-gray-900">{name}</h2>
          <span className="text-xs text-gray-400 truncate max-w-[160px]">{lastMessage}</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-gray-500">{time}</span>
        {unreadCount > 0 && (
          <div className="w-5 h-5 bg-primary text-white text-xs flex items-center justify-center rounded-full hover:scale-110 transition-transform">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
}
