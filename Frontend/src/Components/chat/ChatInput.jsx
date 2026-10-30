import { useState } from "react";
import { Paperclip, Send, Mic } from "lucide-react";

export default function ChatInput({ onSend, disabled }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prompt.trim() || disabled) return;

    onSend(prompt.trim());
    setPrompt("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-1 rounded-2xl bg-[#202137] border border-white/10 focus-within:border-purple-500/50 transition"
    >
      <button type="button" className="text-gray-500 hover:text-white">
        <Paperclip size={19} />
      </button>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
        className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500 min-w-0"
      />

      <button type="button" className="text-gray-500 hover:text-white">
        <Mic size={19} />
      </button>

      <button
        type="submit"
        disabled={!prompt.trim() || disabled}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:opacity-90 disabled:opacity-40 transition"
      >
        <Send size={17} />
      </button>
    </form>
  );
}