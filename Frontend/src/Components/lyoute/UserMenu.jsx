import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full hover:bg-white/10 p-1.5 transition"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold">
          U
        </div>
        <ChevronDown size={15} className="text-gray-400" />
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-48 p-2 rounded-xl bg-[#1b1c32] border border-white/10 shadow-2xl z-50">
          <button className="w-full flex items-center gap-3 p-3 text-sm text-gray-300 hover:bg-white/10 rounded-lg">
            <User size={16} /> My Profile
          </button>

          <button className="w-full flex items-center gap-3 p-3 text-sm text-gray-300 hover:bg-white/10 rounded-lg">
            <Settings size={16} /> Settings
          </button>

          <div className="h-px bg-white/10 my-1" />

          <button className="w-full flex items-center gap-3 p-3 text-sm text-red-400 hover:bg-red-500/10 rounded-lg">
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>
  );
}