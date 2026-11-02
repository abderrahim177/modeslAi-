export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 text-gray-800 font-bold text-sm">
      <span>Vortex is thinking</span>

      <div className="flex gap-1">
        {[1, 2, 3].map((item) => (
          <span
            key={item}
            className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"
            style={{ animationDelay: `${item * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}