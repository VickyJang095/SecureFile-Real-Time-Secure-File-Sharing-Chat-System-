import React from "react";
import {
  FaChartBar,
  FaUpload,
  FaFolder,
  FaStar,
  FaComments,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar({ onNavigate, onLogout, activePage }) {
  const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: <FaChartBar /> },
  { id: "upload", label: "Upload", icon: <FaUpload /> },
  { id: "myfiles", label: "My Files", icon: <FaFolder /> }, 
  { id: "favorite", label: "Favorite", icon: <FaStar /> },
  { id: "messenger", label: "Messenger", icon: <FaComments /> },
];

  return (
    <div className="flex flex-col h-full justify-between text-white ">
      <div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl mb-2 transition-all duration-300 ${
              activePage === item.id
                ? "bg-purple-600/40 border border-purple-400 text-purple-200 shadow-md"
                : "hover:bg-white/10 text-gray-300"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <button
        onClick={onLogout}
        className="w-full mt-6 py-3 rounded-2xl bg-red-600/60 hover:bg-red-700/70 
                   transition-all duration-300 font-semibold text-white 
                   flex items-center justify-center gap-2"
      >
        <FaSignOutAlt className="text-lg" />
        <span>Logout</span>
      </button>

    </div>
  );
}
