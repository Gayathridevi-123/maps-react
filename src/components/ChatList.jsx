import React from "react";
import ChatItem from "./ChatItem";

const messages = [
 
  {
    name: "Abhay Lipuraj",
    text: "Hey baby 😘💌 just wanted to say I miss you sooo much 💖✨",
    time: "10:15",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Rajkiran",
    text: "Let’s meet tomorrow at the café ☕",
    time: "11:45",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Sindhu Lipuraj",
    text: "I’ll send you the file soon! 📁",
    time: "12:26",
    img: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Krishna",
    text: "How’s the project going? 📊",
    time: "8:50",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Divya",
    text: "I finished the presentation 😄🎉",
    time: "9:30",
    img: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Rizwan",
    text: "Bro, call me when you’re free 📞",
    time: "3:26",
    img: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];

const ChatList = () => {
  return (
    <div className="w-[380px] mx-auto bg-white rounded-2xl shadow-lg p-4">
      {/*  Header */}
      <h2 className="text-2xl font-bold text-green-600 mb-3 text-center">
        WhatsApp
      </h2>

      {/*  Search box */}
      <input
        type="text"
        placeholder="Search or start new chat "
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/*  Chat list */}
      <div className="bg-gray-50 rounded-lg p-2">
        {messages.map((msg, index) => (
          <ChatItem key={index} {...msg} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
