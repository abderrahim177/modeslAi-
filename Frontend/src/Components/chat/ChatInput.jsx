import { useState } from "react";
import { Paperclip, Send, Mic } from "lucide-react";
import ModelSelector from "../model/ModelSelector";
export default function ChatInput({ onSend, disabled }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prompt.trim() || disabled) return;

    onSend(prompt.trim());
    setPrompt("");
  };
  let models = {};

  const SelectedMpdel = (model) => {
    models = model;
    return model || {};
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start mb-[20px] gap-2 p-1 px-2 py-2 rounded-3xl bg-slate-100 shadow-2xl shadow-gray-500 border border-gray-400 w-[90%] mx-auto transition"
    >
      <div className="flex justify-between items-center w-full gap-2">
      <button type="button" className="text-gray-800 hover:text-gray-900">
        <Paperclip size={19} />
      </button>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
        className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-600/70 placeholder:font-semibold min-w-0"
      />
      <button type="button" className="text-gray-800 hover:text-gray-900">
        <Mic size={19} />
      </button>
      <button
        type="submit"
        disabled={!prompt.trim() || disabled}
        className="w-8 h-8 flex items-center justify-center rounded-2xl bg-blue-500 text-white hover:opacity-90 disabled:opacity-40 transition"
      >
        <Send size={17} />
      </button>
      </div>
      <div className="flex items-center justify-end w-full py-2 pr-4">
        <ModelSelector model={SelectedMpdel}/>
      </div>
      
      
    </form>
  );
}