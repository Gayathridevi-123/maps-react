import React from "react";

const ChatItem = ({ name, text, time, img }) => {
  return (
    <div className="flex justify-between items-center border-b py-3 px-2 hover:bg-purple-50 transition">
      {/* Left side - profile & text */}
      <div className="flex items-center space-x-3">
        <img
          src={img}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{text}</p>
        </div>
      </div>

      {/* Right side - time */}
      <span className="text-gray-400 text-xs">{time}</span>
    </div>
  );
};

export default ChatItem;
