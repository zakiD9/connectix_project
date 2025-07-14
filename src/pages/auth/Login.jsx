import Button from '../../components/button';
import Input from '../../components/Input'; 
import GoogleButton from '../../components/googleButton';
import SignUpOrIn from '../../components/signuporin';
import Check from '../../components/check';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
const Login = () => {
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

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form  onSubmit={handleLoginSubmit}  className="w-full max-w-sm space-y-4 flex flex-col border p-5 rounded-lg shadow-lg">
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
    </div>
  );
};

export default Login;