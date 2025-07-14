import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Input from "../../Input";
import RoundedInput from "../../roundedinput";
import Message from "./Message";
import { HiPhone } from "react-icons/hi";
import MessageHeader from "./MessageHeader";
import ChatSpace from "./ChatSpace";




export default function MessageSection({setShowUserChatDetails}){
    
    return(
        <div className="w-3/4 shadow h-screen p-3 rounded-lg mr-4 flex flex-col bg-white">
            <MessageHeader setShowUserChatDetails={setShowUserChatDetails}/>
            <ChatSpace />
        </div>
    )
}