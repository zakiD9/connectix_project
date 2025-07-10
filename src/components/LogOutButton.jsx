import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";



export default function LogOut(){
     const navigate = useNavigate();
  const LogOut = ()=>{
    localStorage.setItem('token',null);
    navigate(`/Login`);
  }
    return(
        <button onClick={LogOut}>
        <ArrowRightOnRectangleIcon className="w-6 h-6 text-black opacity-70 hover:opacity-100 cursor-pointer" />
        </button>
        
    )
}