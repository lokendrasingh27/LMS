import React, { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey There!", sender: "bot", time: "Today, 8:30pm" },
    { id: 2, text: "How are you?", sender: "bot", time: "Today, 8:31pm" },
    { id: 3, text: "Hello!", sender: "user", time: "Today, 8:33pm" },
    { id: 4, text: "I am fine and how are you?", sender: "user", time: "Today, 8:34pm" },
    { id: 5, text: "I am doing well, Can we meet", sender: "bot", time: "Today, 8:36pm" },
    { id: 6, text: "Yes Sure!", sender: "user", time: "Today, 8:58pm" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      time: "Just now",
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="flex-1 flex flex-col bg-white ">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <img src="https://via.placeholder.com/40" className="rounded-full" alt="Anil" />
          <div>
            <p className="font-semibold">Anil</p>
            <p className="text-sm text-gray-500">Online • Last seen, 2:02pm</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-[#00173D] text-lg">
          {/* <span>📞</span>
          <span>🎥</span>
          <span>🔔</span>
          <span>💬</span> */}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-[#E8F1F2]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-2xl px-4 py-2 max-w-xs text-sm relative ${
                msg.sender === "user"
                  ? "bg-[#0A5F6F] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-xs text-right mt-1 opacity-70">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-4 flex items-center gap-2 bg-white sticky bottom-0">
        <button className="text-gray-500 text-xl">📎</button>
        <button className="text-gray-500 text-xl">😊</button>
        <input
          type="text"
          placeholder="Type your message here..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#0A5F6F]"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-[#0A5F6F] text-white px-4 py-2 rounded-full hover:bg-[#086a7d]"
        >
          📤
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
