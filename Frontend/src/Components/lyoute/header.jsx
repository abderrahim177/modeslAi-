import { Bell, Sparkles } from "lucide-react";
import ModelSelector from "../model/ModelSelector";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className="h-[50px] flex items-center justify-between px-5 border-b border-white/10 bg-[#0b0c1b]/90">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <Sparkles size={19} className="text-white" />
        </div>

        <h1 className="text-xl font-bold tracking-wide text-white">
          Vortex
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <ModelSelector />

        <button className="w-9 h-9 rounded-xl flex justify-center items-center hover:bg-white/10 text-gray-400 hover:text-white transition">
          <Bell size={19} />
        </button>

        <UserMenu />
      </div>
    </header>
  );
}