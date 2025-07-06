import { useState } from "react";
import Input from "./Input";
import Button from "./button";

const ChatMessage = ({ isSender, text }) => (
  <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}>
    <div className={`px-4 py-2 rounded-lg max-w-[70%] ${isSender ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
      {text}
    </div>
  </div>
);

const ChatComponent = ({ selectedUser }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there!", sender: "me" },
    { id: 2, text: "Hi! Can I ask about the couch?", sender: "other" },
    { id: 3, text: "Sure! What color are you interested in?", sender: "me" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: "me" }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Top User Info */}
      <div className="flex items-center gap-3 px-4 py-3 border-b">
        <img src={selectedUser?.profileImage || "https://randomuser.me/api/portraits/men/32.jpg"} className="w-10 h-10 rounded-full" alt={selectedUser?.firstName} />
        <div>
          <div className="font-semibold text-gray-800">{selectedUser?.firstName} {selectedUser?.lastName}</div>
          <div className="text-sm text-gray-500">@{selectedUser?.userName}</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} text={msg.text} isSender={msg.sender === "me"} />
        ))}
      </div>

      {/* Input */}
      <div className="border-t px-4 py-3 flex justify-between items-center">
       <Input type="text" value={input} onChange={setInput} placeholder="type a message..." className="flex-1"/>
        <Button text="send" onClick={handleSend} />
      </div>
    </div>
  );
};

export default ChatComponent;
