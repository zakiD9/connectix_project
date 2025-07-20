import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import GoogleButton from "./googleButton";
import SignUpOrIn from "./signuporin";
import Input from "./Input";
import Button from "./button";
import Check from "./check";
import illustration from "../assets/ChatGPT Image Jul 20, 2025, 06_18_22 PM.png";


export default function LoginForm() {

    const {
    email,
    password,
    errors,
    setEmail,
    setPassword,
    successMessage,
    login
  } = useAuthStore();
const navigate =useNavigate();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login();
    if(localStorage.getItem('token')){
      navigate('/');
    }
  };
    return(
        <div className=" flex flex-col bg-white border rounded-xl overflow-hidden shadow-lg md:items-stretch md:flex-row items-center justify-center w-full max-w-4xl p-5 ">
        <form  onSubmit={handleLoginSubmit}  className="w-full max-w-sm space-y-4 flex flex-col  p-8">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <GoogleButton label="Sign in with Google" onClick={() => console.log('Google login clicked')} />
            <SignUpOrIn label="or sign in with" />
        <Input error={errors.emailError} placeholder="example: D9@gmail.com" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input error={errors.passwordError} placeholder="*******" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <Check checkwhat="Remember me" checked={false} onChange={() => console.log('Checkbox toggled')} />
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
        <Button text="Login" type="submit" />
        <a href="/ForgetPassword" className="text-center w-fit self-center  text-sm hover:underline  text-gray-500">forget password?</a>
        <h2 className="text-center text-sm text-black">don't have an account? <a href="/SignUp"  className="hover:underline text-primary  font-bold">Sign Up</a></h2>
      </form> 
      <div className="hidden md:block ">
        <img src={illustration} alt="Login Illustration" className="object-cover h-full w-full rounded-lg" />
      </div>
      </div>
    )
}