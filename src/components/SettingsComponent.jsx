import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Input from "./Input";
import ContactInformations from "./ContactInformation";
import Button from "./button";
import SecondaryButton from "./SecondaryButton";
import UpdateEmailDialog from "./updateEmail";
import { useUserStore } from "../store/userStore";
import NoBgButton from "./nobgbutton";

export default function AccountSettings() {
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState("bryan.cranston@mail.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
const showEmailDialog = useUserStore((state) => state.showEmailDialog);
const setShowEmailDialog = useUserStore((state) => state.setShowEmailDialog);


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
            <Input disabled={true}  label='First Name' />
            <div className="mt-5 space-x-2">
                <Button text='Save' />
                <SecondaryButton children='Cancel' />
            </div>
            
        </div>
        <div className="flex-1">
            <Input disabled={true} label='Last Name' />
        </div>
        <NoBgButton children='edit'/>
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
        <NoBgButton children='edit'/>
        </div>
        
        <div className="flex flex-col gap-4">
          <Input disabled={true} placeholder='Current Password' />
          <Input disabled={true} placeholder='New Password' />
          <div className="mt-2 space-x-2">
                <Button text='Save' />
                <SecondaryButton children='Cancel' />
            </div>
        </div>
      </div>
    </div>
  );
}
