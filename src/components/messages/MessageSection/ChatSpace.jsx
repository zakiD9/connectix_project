import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Message from "./Message";
import ChatRoundedInput from "../../ChatInput";
// import { useSocketStore } from "../../../store/useSocketStore";
import { useEffect, useState } from "react";
// import socket from "../../../utils/socket";



export default function ChatSpace(){
    const [input,setInput]=useState('');
// const messages = useSocketStore((s) => s.messages);
// const addMessage = useSocketStore((s) => s.addMessage);
// const sendMessage = useSocketStore((s) => s.sendMessage);
 

//     useEffect(()=>{
//         socket.on('receive_message',(data)=>{
//             addMessage(data);
//         });

//     return()=>{
//         socket.off('receive_message');
//     };
//     },[]);

      const handleSend = () => {
//     if (input.trim() === '') return;
//     sendMessage(input);
    setInput('');
  };

    return(
        <div className="flex flex-col mt-3 py-3 overflow-y-auto bg-gray-100 rounded-lg">
                <div className="bg-white flex sticky top-0 self-center w-28 rounded-lg p-2">
                    <h2>Today, jan 24</h2>
                </div>
                <div className="my-3 mx-3">
                    {[false,true,false,false,true,false,false,false,true,false,false].map((isSender)=>(<Message isSender={isSender}/>))}
                </div>
                <div className="flex sticky bottom-0  mx-3 justify-center ">
                    <div className="flex-1">
                        <ChatRoundedInput value={input} onChange={(e)=>{e.target.value}} placeholder="Type a message"/>
                        </div>
                    
                    <button
            className="ml-2 p-3 border bg-primary border-white rounded-lg hover:bg-blue-300"
          >
            <PaperAirplaneIcon onClick={handleSend} className="w-5 h-5 text-white  rotate-90" />
          </button>
                </div>
            </div>
    )
}