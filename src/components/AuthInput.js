export default function AuthInput({ label, type, placeholder, value, onChange, icon }) {
  return (
    <div className="mb-5">
      <label className="block text-sm text-gray-200 mb-1">{label}</label>
      <div className="flex items-center border-b border-gray-300">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none py-2 text-white placeholder-gray-300"
        />
        <span className="text-gray-300 ml-2">{icon}</span>
      </div>
    </div>
  );
}
