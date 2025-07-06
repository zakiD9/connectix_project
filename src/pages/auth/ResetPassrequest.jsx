import {  useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/Input';
import { useAuthStore } from '../../store/authStore'; // Assuming you have a store for auth state
const ResetPass = () => {
  const {email,setEmail,resetPassword}=useAuthStore();
  const [submitted, setSubmitted] = useState(false);
 const [error, setError] = useState(''); 
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    await resetPassword(email);
    setSubmitted(true);
    
    
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleResetSubmit}
        className="w-full max-w-sm space-y-4 flex flex-col border p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        {submitted ? (
          <div className="text-green-600 text-center">
            If this email exists, a reset link has been sent.
          </div>
        ) : (
          <>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error} 
            />
            <Button text="Send Reset Link" type="submit"  />
          </>
        )}
        <a
          href="/Login"
          className="text-center w-fit self-center text-sm text-gray-500 hover:underline"
        >
          Back to Login
        </a>
      </form>
    </div>
  );
};

export default ResetPass;