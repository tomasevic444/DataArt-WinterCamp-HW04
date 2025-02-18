import React, { useState } from "react";
import ReactionButton from "./ReactionButton";
import "../styles/reactionBar.css";

const emojiList = {
  faceWithTears: { icon: "😂", count: 0 },
  heart: { icon: "❤️", count: 0 },
  tumbsUp: { icon: "👍", count: 0 },
};

const ReactionBar = () => {
  const [reactions, setReactions] = useState(emojiList);

  const handleReaction = (id) => {
    setReactions((prev) => ({
      ...prev,
      [id]: { ...prev[id], count: prev[id].count + 1 },
    }));
  };

  return (
    <div className="container">
      <div id="content" className="content">
        {Object.entries(reactions).map(([key, { icon, count }]) => (
          <ReactionButton key={key} id={key} emoji={icon} count={count} onClick={handleReaction} />
        ))}
      </div>
    </div>
  );
};

export default ReactionBar;