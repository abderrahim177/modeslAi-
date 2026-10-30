import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#17182d] border border-white/10 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h2 className="font-semibold text-white">{title}</h2>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={19} />
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}