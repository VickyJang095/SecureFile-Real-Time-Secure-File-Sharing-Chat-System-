export default function AuthButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full py-3 rounded-full bg-white text-purple-700 font-semibold shadow-md hover:opacity-90 transition"
    >
      {children}
    </button>
  );
}
