import { Copy, ThumbsUp, ThumbsDown } from "lucide-react";

export default function MessageActions() {
  return (
    <div className="flex items-center gap-3 mt-3 text-gray-500">
      <button title="Copy" className="hover:text-white transition">
        <Copy size={15} />
      </button>

      <button title="Good response" className="hover:text-green-400 transition">
        <ThumbsUp size={15} />
      </button>

      <button title="Bad response" className="hover:text-red-400 transition">
        <ThumbsDown size={15} />
      </button>
    </div>
  );
}