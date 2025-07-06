import Button from '../../components/button';
import Input from '../../components/Input'; 
import GoogleButton from '../../components/googleButton';
import SignUpOrIn from '../../components/signuporin';
import Check from '../../components/check';
import { useAuthStore } from '../../store/authStore';
import { useState } from 'react';
const NewPassword = () => {
 const {
    password,
    setPassword
  } = useAuthStore();
const [newPassword,setNewPassword]=useState(null);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form  onSubmit={handleLoginSubmit}  className="w-full max-w-sm space-y-4 flex flex-col border p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        <Input placeholder="New password..." label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input  placeholder="confirm new password" label="Confirm Password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <Button text="Submit" type="submit" />
      </form> 
    </div>
  );
};

export default NewPassword;