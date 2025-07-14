import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";



export default function LogOut(){
     const navigate = useNavigate();
  const{logout}=useAuthStore();
  const LogOut = ()=>{
    logout();
  navigate('/Login');
  }
    return(
        <button onClick={LogOut}>
        <ArrowRightOnRectangleIcon className="w-6 h-6 text-black opacity-70 hover:opacity-100 cursor-pointer" />
        </button>
        
    )
}