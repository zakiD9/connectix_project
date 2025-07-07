const Message = ({ content="aw wchniya", time="10:00", isSender=true, avatar="nooo" }) => {
  return (
    <div className={`flex  items-start gap-2 mb-3 ${isSender ? 'flex-row-reverse justify-start' : 'flex-row justify-start'}`}>
      <div className={`flex ${isSender  ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="mx-1">
            <img
        src={avatar}
        alt="avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      </div>
      <div>
        <span className={`block text-xs opacity-70 mt-1 ${isSender ? "text-right" : "text-left"}`}>{time} PM</span>
        <div className={`max-w-xs px-4 py-2 rounded-lg text-sm ${isSender
        ? 'bg-primary text-white rounded-tr-none'
        : 'bg-gray-50 text-gray-900 rounded-tl-none'
      }`}>
        <p>{content}</p>
      </div>
        </div>
      </div>
      
    </div>
  );
};
export default Message;