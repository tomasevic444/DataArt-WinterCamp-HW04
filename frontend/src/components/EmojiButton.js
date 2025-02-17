import React from "react";

const EmojiButton = ({ emoji, count, onClick }) => {
  return (
    <button
      className="text-2xl p-2 hover:scale-110 transition-transform"
      onClick={onClick}
    >
      {emoji} <span className="text-sm font-bold">{count}</span>
    </button>
  );
};

export default EmojiButton;