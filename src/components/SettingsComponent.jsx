import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Input from "./Input";
import ContactInformations from "./ContactInformation";
import Button from "./button";
import SecondaryButton from "./SecondaryButton";
import UpdateEmailDialog from "./updateEmail";
import { useUserStore } from "../store/userStore";
import NoBgButton from "./nobgbutton";
import { updateName, updatePassword } from "../services/userService";

export default function AccountSettings() {
    const [profilePic, setProfilePic] = useState(null);
    const [nameData,setNameData]=useState({firstName:'',lastName:''});
    const [passData,setPassData]=useState({currentPassword:'',newPassword:''});
    const [isName,setIsName]=useState(false);
    const [isPass,setIsPass]=useState(false);
    const showEmailDialog = useUserStore((state) => state.showEmailDialog);
    const setShowEmailDialog = useUserStore((state) => state.setShowEmailDialog);

  const handleSaveName = async () =>{
    setIsName(false);
    try{
      console.log("nameData:",nameData);
      const response = await updateName(nameData);
      console.log("Name Updated:",response);
    }catch(error){
      console.log(error);
    }
  }

  const handleSavePass = async ()=>{
    setIsPass(false);

    try{
      console.log(passData);
      const response = await updatePassword(passData);
      console.log("updated Password:",response);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="w-3/4 ml-80 mx-auto p-6 space-y-6 text-sm">
      <div>
        <h2 className="text-xl font-semibold">Account</h2>
        <p className="text-gray-500">
          Real-time information and activities of your property.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src={
            profilePic ||
            "https://ui-avatars.com/api/?name=Bryan+Cranston&background=random"
          }
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-500">PNG, JPEG under 15MB</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
              Upload new picture
            </button>
            <button className="px-3 py-1 text-red-500 hover:underline">Delete</button>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
            <Input disabled={!isName} onChange={(e)=>setNameData({...nameData,firstName:e.target.value})} value={nameData.firstName}  label='First Name' />
           {isName && (<div className="mt-5 space-x-2">
                <Button onClick={handleSaveName} text='Save' />
                <SecondaryButton onClick={()=>{setIsName(false)}} children='Cancel' />
            </div>)}
            
        </div>
        <div className="flex-1">
            <Input disabled={!isName} onChange={(e)=>setNameData({...nameData,lastName:e.target.value})} value={nameData.lastName} label='Last Name' />
        </div>
        <NoBgButton onClick={()=>{setIsName(!isName)}} children='edit'/>
      </div>

      {/* Contact Email */}
      <div>
        <ContactInformations />
        <UpdateEmailDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
      </div>

      {/* Password Change */}
      <div>
        <div className="flex justify-between">
        <div>
            <label className="block mb-1 text-gray-700">Password </label>
        <p className="text-xs text-gray-500 mb-2">Modify your current password. </p>
        </div>
        <NoBgButton onClick={()=>{setIsPass(!isPass)}} children='edit'/>
        </div>
        
        <div className="flex flex-col gap-4">
          <Input disabled={!isPass} onChange={(e)=>setPassData({...passData,currentPassword:e.target.value})} placeholder='Current Password' />
          <Input disabled={!isPass} onChange={(e)=>setPassData({...passData,newPassword:e.target.value})} placeholder='New Password' />
          {isPass &&(<div className="mt-2 space-x-2">
                <Button onClick={handleSavePass} text='Save' />
                <SecondaryButton onClick={()=>{setIsPass(false)}} children='Cancel' />
            </div>)}
        </div>
      </div>
    </div>
  );
}
