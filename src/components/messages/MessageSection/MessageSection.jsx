import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Input from "../../Input";
import RoundedInput from "../../roundedinput";
import Message from "./Message";
import { HiPhone } from "react-icons/hi";
import MessageHeader from "./MessageHeader";
import ChatSpace from "./ChatSpace";
import { useMessageStore } from "../../../store/messageStore";




export default function MessageSection({setShowUserChatDetails}){
    const {selectedChat} = useMessageStore();

    return(
        <div className={`md:w-3/4 ${selectedChat ? 'block' : 'hidden'} md:flex shadow h-screen p-3 w-full rounded-lg md:mr-4 flex flex-col bg-white`}>
            <MessageHeader setShowUserChatDetails={setShowUserChatDetails}/>
            <ChatSpace />
        </div>
    )
}