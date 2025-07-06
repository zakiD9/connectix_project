import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { confirmEmail } from '../../services/authService'; 

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Processing...");

  const userId = searchParams.get('userId');
  const token = searchParams.get('token');

  useEffect(() => {
    const confirm = async () => {
      try {
        await confirmEmail(userId, token);
        setStatus("✅ Your email has been confirmed!");
      } catch (error) {
        console.error("Error confirming email:", error);
        setStatus("❌ Email confirmation failed. Please try again.");
      }
    };

    if (userId && token) {
      confirm();
    } else {
      setStatus("❌ Invalid confirmation link.");
    }
  }, [userId, token]);

  return (
    <div className="min-h-screen flex justify-center items-center text-xl">
      {status}
    </div>
  );
};

export default ConfirmEmail;
