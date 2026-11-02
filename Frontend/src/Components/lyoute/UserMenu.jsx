import { ChevronDown, ChevronUp, LogOut, Settings, User } from "lucide-react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('user');
  const Navigate = useNavigate();
  const NavigateToLogin = () => {
    Navigate('/login')
  }
  return (
    <div className="">
    {token ? 
    <button onClick={NavigateToLogin} title="Login" className="text-gray-800 bg-cyan-300 px-4 py-1 rounded-2xl font-semibold shadow-md shadow-gray-300">
      login
    </button>
    : 
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 rounded-full bg-white/10 shadow-md shadow-gray-800 p-1 transition ${ open ? "bg-gray-900 border-blue-500" : "" }`}>
        <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
          U
        </div>
        <ChevronUp size={15} className={`ml-1 text-gray-400 transition-transform duration-200 ${ open ? "rotate-180 text-orange-400" : ""}`}/>
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-48 p-2 rounded-xl bg-gray-800 border border-white/10 shadow-2xl z-50">
          <button className="w-full flex items-center gap-3 p-2 text-[12px] text-gray-300 hover:bg-white/10 rounded-lg">
            <User size={16} /> My Profile
          </button>

          <button className="w-full flex items-center gap-3 p-2 text-[12px] text-gray-300 hover:bg-white/10 rounded-lg">
            <Settings size={16} /> Settings
          </button>

          <div className="h-px bg-white/10 my-1" />

          <button className="w-full flex items-center gap-3 p-2 text-[12px] text-red-400 hover:bg-red-500/10 rounded-lg">
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>
    }
    </div>
  );
}