
import { Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

export default function MessageActions() {
  const [activeAction, setActiveAction] = useState(null);

  const handleLike = () => {
    setActiveAction((prev) =>
      prev === "like" ? null : "like"
    );
  };

  const handleDislike = () => {
    setActiveAction((prev) =>
      prev === "dislike" ? null : "dislike"
    );
  };

  return (
    <div className="flex items-center gap-3 mt-3 text-gray-500">

      <button
        title="Copy"
        className="hover:text-blue-900 transition text-gray-900"
      >
        <Copy size={15} />
      </button>

      {/* Like */}
      <button
        onClick={handleLike}
        title="Good response"
        className={`transition ${
          activeAction === "like"
            ? "text-green-500"
            : "text-gray-900"
        }`}
      >
        <ThumbsUp
          size={15}
          fill={activeAction === "like" ? "currentColor" : "none"}
        />
      </button>

      {/* Dislike */}
      <button
        onClick={handleDislike}
        title="Bad response"
        className={`transition ${
          activeAction === "dislike"
            ? "text-red-500"
            : "text-gray-900"
        }`}
      >
        <ThumbsDown
          size={15}
          fill={activeAction === "dislike" ? "currentColor" : "none"}
        />
      </button>

    </div>
  );
}
