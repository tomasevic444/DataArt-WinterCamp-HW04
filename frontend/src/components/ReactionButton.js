import React, { useState } from "react";
import "../styles/reactionBar.css";

const ReactionButton = ({ emoji, count }) => {
  const [emojis, setEmojis] = useState([]);

  const handleClick = () => {
    // Create a unique emoji ID for animation
    const newEmoji = { id: Date.now(), emoji };

    // Add emoji to the list
    setEmojis((prev) => [...prev, newEmoji]);

    // Remove emoji after animation
    setTimeout(() => {
      setEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
    }, 2000);
  };

  return (
    <div className="buttonCounter">
      <button className="spawnEmoji button large" onClick={handleClick}>
        {emoji}
      </button>
      <h2 className="count">[{count}]</h2>

      {/* Render animated emojis */}
      {emojis.map((e) => (
        <span key={e.id} className="emoji fade">{e.emoji}</span>
      ))}
    </div>
  );
};

export default ReactionButton;
