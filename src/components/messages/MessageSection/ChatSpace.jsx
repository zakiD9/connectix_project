import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import RoundedInput from "../../roundedinput";
import Message from "./Message";



export default function ChatSpace(){
    return(
        <div className="flex flex-col mt-3 py-3 overflow-y-auto bg-gray-100 rounded-lg">
                <div className="bg-white flex sticky top-0 self-center w-28 rounded-lg p-2">
                    <h2>Today, jan 24</h2>
                </div>
                <div className="my-3 mx-3">
                    {[false,true,false,false,true,false,false,false,true,false,false].map((isSender)=>(<Message isSender={isSender}/>))}
                </div>
                <div className="flex sticky bottom-0  mx-3 justify-between ">
                    <div className="flex-1">
                        <RoundedInput placeholder="Type a message"/>
                        </div>
                    
                    <button
            className="ml-2 p-3 border bg-primary border-white rounded-lg hover:bg-blue-300"
          >
            <PaperAirplaneIcon className="w-5 h-5 text-white  rotate-90" />
          </button>
                </div>
            </div>
    )
}