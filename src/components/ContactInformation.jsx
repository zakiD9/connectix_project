import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useUserStore } from "../store/userStore";

export default function ContactInformations({isMyprofile}){
    const setShowEmailDialog = useUserStore((state) => state.setShowEmailDialog);
    return(
        <div className="px-6 pt-2 pb-4">
        <div className="font-semibold text-gray-800 mb-2">Contact Information</div>
        <div className="flex items-center border-t border-b  px-3 py-3 mb-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 border mr-2">
    <EnvelopeIcon className="w-5 h-5 text-primary" />
  </span>
          <span className="text-sm text-gray-700 flex-1">hello@siothu4.com</span>
         {isMyprofile && ( <button onClick={() => setShowEmailDialog(true)}  className="ml-2">
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5l-4 1 1-4L16.5 3.5Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>)}
        </div>
      </div>
    )
}