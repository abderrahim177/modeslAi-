import { Bot, User } from "lucide-react";
import MessageActions from "./MessageActions";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${
          isUser
            ? "bg-gradient-to-br from-orange-400 to-pink-500"
            : "bg-gradient-to-br from-cyan-500 to-indigo-600"
        }`}
      >
        {isUser ? <User size={17} /> : <Bot size={19} />}
      </div>

      <div className={`max-w-[80%] ${isUser ? "text-right" : ""}`}>
        <p className="text-xs font-semibold text-gray-300 mb-2">
          {isUser ? "You" : "Vortex"}
        </p>

        <div
          className={`p-4 rounded-2xl text-sm leading-7 ${
            isUser
              ? "bg-indigo-600/20 border border-indigo-500/20 text-gray-200"
              : "bg-[#202137] border border-white/5 text-gray-300"
          }`}
        >
          {message.content}
        </div>

        {!isUser && <MessageActions />}
      </div>
    </div>
  );
}