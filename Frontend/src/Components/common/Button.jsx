export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90",
    secondary:
      "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10",
    danger:
      "bg-red-500/10 text-red-400 hover:bg-red-500/20",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}