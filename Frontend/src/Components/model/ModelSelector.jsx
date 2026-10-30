
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Check,
  Sparkles,
  Bot,
  Search,
} from "lucide-react";

const models = [
  {
    id: "gpt",
    name: "ChatGPT",
    provider: "OpenAI",
    description: "Great for reasoning and coding",
    icon: "✳",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    id: "gemini",
    name: "Gemini",
    provider: "Google",
    description: "Fast and creative responses",
    icon: "✦",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    id: "claude",
    name: "Claude",
    provider: "Anthropic",
    description: "Excellent for writing and analysis",
    icon: "✴",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

export default function ModelSelector() {
  const [selected, setSelected] = useState(models[0]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);

  const filteredModels = models.filter((model) =>
    `${model.name} ${model.provider}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
        setSearch("");
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = (model) => {
    setSelected(model);
    setOpen(false);
    setSearch("");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`
          flex items-center gap-2 px-2 py-1.5
          rounded-lg border transition-all duration-200
          ${
            open
              ? "bg-[#22233d] border-purple-500/50"
              : "bg-[#191a30] border-white/[0.08] hover:border-white/20"
          }
        `}
      >
        <div
          className={`w-6 h-6 rounded-md flex items-center justify-center text-sm ${selected.bg} ${selected.color}`}
        >
          {selected.icon}
        </div>

        <div className="text-left">
          <p className="text-xs font-semibold text-white leading-tight">
            {selected.name}
          </p>
          <p className="text-[9px] text-gray-500 leading-tight">
            {selected.provider}
          </p>
        </div>

        <ChevronDown
          size={13}
          className={`ml-1 text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180 text-purple-400" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 top-[calc(100%+8px)] z-50
            w-[250px] overflow-hidden
            rounded-xl border border-white/10
            bg-[#17182b]/95 backdrop-blur-2xl
            shadow-xl shadow-black/40
            animate-in fade-in slide-in-from-top-2 duration-200
          "
        >
          {/* Header */}
          <div className="px-3 pt-3 pb-2">
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles size={12} className="text-purple-400" />
              <h3 className="text-xs font-semibold text-white">
                Choose a model
              </h3>
            </div>
            <p className="text-[10px] text-gray-500">
              Select your AI assistant
            </p>
          </div>

          {/* Search */}
          <div className="px-2.5 pb-2">
            <div className="flex items-center gap-2 px-2.5 rounded-lg bg-white/[0.04] border border-white/[0.07] focus-within:border-purple-500/50 transition-colors">
              <Search size={12} className="text-gray-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search models..."
                className="w-full py-2 bg-transparent outline-none text-xs text-white placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Model list */}
          <div
            className="px-2 flex flex-col gap-1 pb-2 max-h-[210px] overflow-y-auto"
            role="listbox"
            aria-label="AI models"
          >
            {filteredModels.length > 0 ? (
              filteredModels.map((model) => {
                const isSelected = selected.id === model.id;

                return (
                  <button
                    key={model.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(model)}
                    className={`
                      w-full flex items-center gap-1 p-1.5
                      rounded-lg text-left transition-all duration-150
                      ${
                        isSelected
                          ? "bg-purple-500/10 border border-purple-500/20"
                          : "border border-transparent hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-base ${model.bg} ${model.color}`}
                    >
                      {model.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-semibold text-white">
                          {model.name}
                        </p>

                        {isSelected && (
                          <span className="text-[8px] uppercase tracking-wide text-purple-300 bg-purple-500/15 px-1 py-0.5 rounded">
                            Active
                          </span>
                        )}
                      </div>

                      <p className="text-[10px] text-gray-500 mt-0.5">
                        {model.provider}
                      </p>

                      <p className="text-[9px] text-gray-600 mt-0.5">
                        {model.description}
                      </p>
                    </div>

                    {isSelected && (
                      <Check
                        size={14}
                        className="text-purple-400 shrink-0"
                      />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="py-6 text-center">
                <Bot
                  size={20}
                  className="mx-auto text-gray-600 mb-1.5"
                />
                <p className="text-xs text-gray-400">
                  No models found
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-3 py-2 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-[9px] text-gray-600">
              Powered by AI
            </span>

            <span className="flex items-center gap-1.5 text-[9px] text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {models.length} models
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
