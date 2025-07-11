import Button from '../../components/button';
import Input from '../../components/Input'; 
import Select from '../../components/select';
import GoogleButton from '../../components/googleButton';
import SignUpOrIn from '../../components/signuporin';
import Check from '../../components/check';
import { Signup as SignupApi } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';
const Signup = () => {
    const {
        email,
        password,
        username,
        confirmPassword,
        setUsername,
        setConfirmPassword,
        setEmail,
        setPassword,
        errors,
        signup
      } = useAuthStore();
 const handleSignupSubmit = async (e) => {
  e.preventDefault();
  await signup();
};

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form  onSubmit={handleSignupSubmit}  className="w-full max-w-sm space-y-4 flex flex-col border p-6 rounded-lg shadow-lg">
        <GoogleButton label="Sign up with Google" onClick={() => console.log('Google login clicked')} />
            <SignUpOrIn label="or sign up with" />
        <Input placeholder={"example: D9an"} error={errors.usernameError} label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder={"example: D9@gmail.com"} error={errors.emailError} label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder={"*******"} error={errors.passwordError} label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input placeholder={"*******"} error={errors.confirmPasswordError} label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {errors.authError && <p className="text-red-500 text-sm">{errors.authError}</p>}
        <Check checkwhat="I accept D9 Terms and Conditions" checked={false} onChange={() => console.log('Checkbox toggled')} />
        <Button text="Sign Up" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
