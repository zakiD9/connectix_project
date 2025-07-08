import Input from "../../Input";
import MenuList from "../../MenuList";
import RoundedInput from "../../roundedinput";
import UserChatComp from "./UserChatComp";




export default function ChatList({setSelectedChat,selectedChat}){

    return(
        <div className="mx-4 p-3 rounded-lg h-screen  bg-white flex-col w-1/4">
        <div className="flex justify-between p-2">
  <div>
    <h1 className="text-lg font-semibold text-gray-900">Message</h1>
    <span className="text-sm text-gray-500">Sunday, 25 January, 2024</span>
  </div>
  <MenuList
      trigger={<button className="text-gray-500 hover:text-gray-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
      />
    </svg>
  </button>}
      items={[
        { label: "Create Group" },
      ]}
    />
</div>
        <RoundedInput placeholder="Search Chart"/>
        <div className="mt-10">
            {[1,2,3,4,5].map((chat)=>
            (<UserChatComp isSelected={selectedChat===chat} onClick={()=>setSelectedChat(chat)} key={chat}/>)
        )}
        </div>
        
        </div>
    )
}