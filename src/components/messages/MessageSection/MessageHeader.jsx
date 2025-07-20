import { HiPhone } from "react-icons/hi";
import MenuList from "../../MenuList";
import { FiEdit, FiTrash2, FiMoreVertical } from "react-icons/fi";
import { useMessageStore } from "../../../store/messageStore";


export default function MessageHeader({setShowUserChatDetails}){
  const{setSelectedChat}= useMessageStore();
  const onBack = () =>{
    setSelectedChat(null);
  }
    return(
        <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <button onClick={onBack}  className="md:hidden p-2 text-primary rounded-full hover:bg-gray-50 mr-2">🔙 رجوع</button>
                         <img
                          src="walo"
                          alt="walo"
                           className="w-10 h-10 rounded-full mr-3 object-cover border"
                         />
                     <div className="flex flex-col">
                         <h2 onClick={()=>setShowUserChatDetails(true)} className="text-sm font-semibold cursor-pointer text-gray-900">Albert Flores</h2>
                          <span className="text-xs text-gray-400">awlh gha bien ....</span>
                          </div>
                     </div>
                    <div className="flex items-center space-x-7">
                         <HiPhone className="w-6 h-6  hover:text-primary cursor-pointer" />
                        <svg className="w-6 h-6 cursor-pointer hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m0 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v2z" />
          </svg>
                         <MenuList
      trigger={<FiMoreVertical className="w-5 h-5 cursor-pointer hover:text-primary" />}
      items={[
        { label: "Edit", icon: <FiEdit /> },
        { label: "Delete", icon: <FiTrash2 /> },
      ]}
    />
                    </div>
                    </div>
    )
}