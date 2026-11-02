
import { useState } from "react";
import {
  House,
  MessageSquare,
  History,
  Bookmark,
  Settings,
  LogOut,
} from "lucide-react";

const navigation = [
  { icon: House, label: "Dashboard" },
  { icon: MessageSquare, label: "New Chat" },
  { icon: History, label: "History" },
  { icon: Bookmark, label: "Saved" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleLogout = () => {
    // زيد هنا منطق تسجيل الخروج ديالك
    console.log("Logout clicked");
  };

  return (
    <aside className="w-[50px] shrink-0 bg-gray-200 flex flex-col items-start px-[4px] py-5 justify-between">
      {/* Navigation */}
      <div className="flex flex-col gap-1.5">
        {navigation.map(({ icon: Icon, label }) => {
          const isActive = activeItem === label;

          return (
            <div
              key={label}
              className="rounded-xl"
            >
              <button
                type="button"
                title={label}
                onClick={() => setActiveItem(label)}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200
                  ${
                    isActive
                      ? "bg-orange-500 text-white shadow-sm mb-5"
                      : "text-gray-600 hover:bg-white hover:text-gray-900"
                  }`}
              >
                <Icon size={19} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          title="Settings"
          onClick={() => setActiveItem("Settings")}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200
            ${
              activeItem === "Settings"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-gray-300"
            }`}
        >
          <Settings size={19} />
        </button>

        <button
          type="button"
          title="Logout"
          onClick={handleLogout}
          className="w-9 h-9 rounded-full flex items-center justify-center text-red-600 hover:bg-red-300/70 transition-all duration-200"
        >
          <LogOut size={19} />
        </button>
      </div>
    </aside>
  );
}
