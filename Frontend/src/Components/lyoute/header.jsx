
import { Bell, Sparkles } from "lucide-react";
import UserMenu from "./UserMenu";
import { useState, useEffect, useRef } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="h-[43px] flex items-center shadow-md shadow-black justify-between px-5 bg-gray-200/100">

      <div className="flex items-center gap-3">

        {/* Sidebar Toggle */}
        <SidebarTrigger className="h-8 w-8 text-gray-700 hover:bg-gray-300" />

        <div className="w-9 h-9 rounded-xl flex items-center justify-center">
          <Sparkles size={19} className="text-gray-900" />
        </div>

        <h1 className="text-xl font-bold tracking-wide text-gray-800">
          Vortex
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-xl flex justify-center items-center hover:bg-gray-500 text-gray-600 hover:text-white transition"
          >
            <Bell size={19} />
          </button>

          {open && (
            <div className="absolute right-[-20px] top-11 w-[200px] rounded-xl shadow-lg bg-white border border-white/10 z-50">
              <div className="w-full flex items-center gap-3 px-3 py-2 text-[12px] text-gray-300 rounded-lg">
                {notification.length > 0 ? (
                  notification.map((item, index) => (
                    <div key={index}>
                      <p>{item}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600 font-bold">
                    notification not found!
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <UserMenu />
      </div>
    </header>
  );
}
