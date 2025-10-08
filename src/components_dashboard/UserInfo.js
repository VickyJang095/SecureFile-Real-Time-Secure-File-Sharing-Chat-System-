import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserInfo({ user }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl border border-purple-300/40 shadow">
      <FaUserCircle className="text-3xl text-purple-300" />
      <div className="text-white">
        <p className="font-semibold">{user?.username || "Guest"}</p>
        <p className="text-xs text-gray-500">Online</p>
      </div>
    </div>
  );
}
