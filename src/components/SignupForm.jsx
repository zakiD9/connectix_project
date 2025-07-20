import Input from '../components/Input';
import Button from '../components/button';
import GoogleButton from '../components/googleButton';
import SignUpOrIn from '../components/signuporin';
import Check from '../components/check';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import illustration from "../assets/ChatGPT Image Jul 20, 2025, 06_18_22 PM.png";

export default function SignupForm() {

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
    <div className="flex flex-col bg-white border rounded-xl overflow-hidden shadow-lg md:flex-row md:items-stretch items-center justify-center w-full max-w-4xl p-5">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 flex flex-col p-8">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <GoogleButton label="Sign up with Google" onClick={() => console.log('Google signup clicked')} />
        <SignUpOrIn label="or sign up with" />

        <Input label="Username" placeholder="Daaa9aaa" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input error={errors.emailError} placeholder="example@domain.com" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input error={errors.passwordError} placeholder="********" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input placeholder="********" label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

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
      <div className="hidden md:block">
        <img
          src={illustration}
          alt="Signup Illustration"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}
