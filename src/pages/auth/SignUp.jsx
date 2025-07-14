import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/button';
import GoogleButton from '../../components/googleButton';
import SignUpOrIn from '../../components/signuporin';
import Check from '../../components/check';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const {
    email,
    password,
    username,
    confirmPassword,
    errors,
    successMessage,
    setEmail,
    setPassword,
    setUsername,
    setConfirmPassword,
    signup
  } = useAuthStore();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      useAuthStore.getState().setError("authError", "Passwords do not match");
      return;
    }

    await signup();

    if (localStorage.getItem('token')) {
      navigate('/confirm-email');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 flex flex-col border p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <GoogleButton label="Sign up with Google" onClick={() => console.log('Google signup clicked')} />
        <SignUpOrIn label="or sign up with" />

        <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input error={errors.emailError} placeholder="example@domain.com" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input error={errors.passwordError} placeholder="********" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input placeholder="Confirm Password" label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <Check checkwhat="I agree to the terms and conditions" checked={false} onChange={() => console.log('Checked')} />

        {errors.authError && (
          <div className="text-red-500 text-sm text-center">
            {errors.authError}
          </div>
        )}
        {successMessage && (
          <div className="text-green-500 text-sm text-center mb-2">
            {successMessage}
          </div>
        )}

        <Button text="Sign Up" type="submit" />

        <p className="text-center text-sm text-black">
          Already have an account? <a href="/Login" className="hover:underline text-primary font-bold">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
