import React, { useEffect, useState } from "react";
import UserList from "../components_mes/UserList";
import ChatWindow from "../components_mes/ChatWindow";
import backgroundImage from "../assets/background.jpg";

export default function MessengerPage({ user }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || {};
    setUsers(storedUsers);
    setMessages(storedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (users.length === 0 && user?.username) {
      const defaultUser = {
        id: crypto.randomUUID(),
        name: user.username,
        avatar: `https://i.pravatar.cc/100?u=${user.username}`,
        online: true,
      };
      setUsers([defaultUser]);
      localStorage.setItem("users", JSON.stringify([defaultUser]));
    }
  }, [users, user]);

  const handleSendMessage = (msg) => {
    if (!selectedUser) return;
    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), msg],
    }));
  };

  return (
    <div

    >
      <div className="flex gap-6 w-[90%] h-[60vh]">
        <div className="w-1/3 h-full backdrop-blur-xl bg-white/10 border border-purple-400/30 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.25)] p-4 flex flex-col text-white">
          <h2 className="text-lg font-semibold mb-3 text-white-300">
            Người dùng online
          </h2>
          <div className="flex-1 overflow-y-auto">
            <UserList
              users={users.filter((u) => u.name !== user?.username && u.online)}
              selectedUser={selectedUser}
              onSelectUser={setSelectedUser}
            />
          </div>
        </div>

        <div className="flex-1 h-full backdrop-blur-xl bg-white/10 border border-purple-400/30 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.25)] p-4 text-white">
          {selectedUser ? (
            <ChatWindow
              user={user}
              selectedUser={selectedUser}
              messages={messages[selectedUser.id] || []}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              💬 Chọn người dùng để bắt đầu trò chuyện
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
