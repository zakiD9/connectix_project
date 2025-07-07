import Button from '../../components/button';
import Input from '../../components/Input'; 
import Select from '../../components/select';
import GoogleButton from '../../components/googleButton';
import SignUpOrIn from '../../components/signuporin';
import Check from '../../components/check';
import { Signup as SignupApi } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';
const Register = () => {
    const {
        firstName,
        lastName,
        birthDate,
        setFirstName,
        setLastName,
        setBirthDate,
        errors
      } = useAuthStore();
      const handleRegisterSubmit = ()=>{

      }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form  onSubmit={handleRegisterSubmit}  className="w-full max-w-sm space-y-4 flex flex-col border p-6 rounded-lg shadow-lg">
        <GoogleButton label="Sign up with Google" onClick={() => console.log('Google login clicked')} />
            <SignUpOrIn label="or sign up with" />
        <Input placeholder={"example: D9an"} error={errors.firstName} label="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Input placeholder={"example: zaki 123"} error={errors.lastName} label="Last Name" type="email" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Input placeholder={"*******"} error={errors.birthDate} label="Birth Date" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        <Check checkwhat="I accept D9 Terms and Conditions" checked={false} onChange={() => console.log('Checkbox toggled')} />
        <Button text="Sign Up" type="submit" />
      </form>
    </div>
  );
};

export default Register;
