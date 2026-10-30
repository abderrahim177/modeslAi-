import { MessageSquare, Plus, Search, MoreHorizontal } from "lucide-react";

const conversations = [
  {
    date: "Today",
    chats: [
      "Write a business report",
      "Podcast intro in Deep Voice",
      "Analyze Sales Data",
    ],
  },
  {
    date: "Yesterday",
    chats: [
      "Generate a blog",
      "Create a City Space",
      "Generate a chart for revenue",
    ],
  },
];

export default function HistorySidebar() {
  return (
    <aside className="w-[230px] shrink-0 bg-[#111226] border-r border-white/10 flex flex-col">
      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-semibold">History</h2>
          <Search size={17} className="text-gray-500" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition">
          <Plus size={17} />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-3 space-y-6">
        {conversations.map((group) => (
          <div key={group.date}>
            <p className="text-xs text-gray-500 mb-3 px-1">
              {group.date}
            </p>

            <div className="space-y-2">
              {group.chats.map((chat) => (
                <button
                  key={chat}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-left bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white transition group"
                >
                  <MessageSquare size={15} className="shrink-0 text-purple-400" />

                  <span className="text-xs truncate flex-1">
                    {chat}
                  </span>

                  <MoreHorizontal
                    size={15}
                    className="opacity-0 group-hover:opacity-100"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10">
        <p className="text-xs text-gray-500">Free Plan</p>
        <div className="h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
          <div className="w-[35%] h-full bg-purple-500 rounded-full" />
        </div>
        <p className="text-[10px] text-gray-500 mt-2">
          35% of your usage
        </p>
      </div>
    </aside>
  );
}