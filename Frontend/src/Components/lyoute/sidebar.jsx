import {
  House,
  MessageSquare,
  History,
  Bookmark,
  Settings,
  PanelLeftClose,
} from "lucide-react";

const navigation = [
  { icon: House, label: "Dashboard" },
  { icon: MessageSquare, label: "New Chat" },
  { icon: History, label: "History" },
  { icon: Bookmark, label: "Saved" },
];

export default function Sidebar() {
  return (
    <aside className="w-[50px] shrink-0 bg-[#0b0c1b] border-r border-white/10 flex flex-col items-center py-5 justify-between">
      <div className="flex flex-col gap-3">
        {navigation.map(({ icon: Icon, label }, index) => (
          <button
            key={label}
            title={label}
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition ${
              index === 0
                ? "bg-purple-500/20 text-purple-400"
                : "text-gray-500 hover:text-white hover:bg-white/10"
            }`}
          >
            <Icon size={19} />
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <button className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-500 hover:bg-white/10 hover:text-white">
          <Settings size={19} />
        </button>

        <button className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-500 hover:bg-white/10 hover:text-white">
          <PanelLeftClose size={19} />
        </button>
      </div>
    </aside>
  );
}