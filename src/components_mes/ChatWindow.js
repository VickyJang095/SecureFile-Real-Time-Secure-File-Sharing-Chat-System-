import React, { useRef, useEffect } from "react";
import MessageInput from "./MessageInput";

export default function ChatWindow({ user, selectedUser, messages, onSendMessage }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
        <img
          src={selectedUser.avatar}
          alt={selectedUser.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{selectedUser.name}</p>
          <p className="text-xs text-gray-400">
            {selectedUser.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 px-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === user.username ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-md ${
                msg.sender === user.username
                  ? "bg-purple-600/60"
                  : "bg-white/10"
              }`}
            >
              {msg.type === "text" ? (
                <p>{msg.text}</p>
              ) : (
                <a
                  href={msg.fileData}
                  download={msg.fileName}
                  className="flex items-center gap-2 text-blue-300 underline"
                >
                  📎 {msg.fileName}
                </a>
              )}
              <p className="text-[10px] text-gray-300 text-right mt-1">
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>

      <div className="mt-4">
        <MessageInput
          onSend={(msg) =>
            onSendMessage({
              ...msg,
              sender: user.username,
            })
          }
        />
      </div>
    </div>
  );
}
