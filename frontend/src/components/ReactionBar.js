import React, { useState } from "react";
import ReactionButton from "./ReactionButton";
import "../styles/reactionBar.css";

const ReactionBar = ({ votes }) => {
  // Convert votes array to an object { emoji: count }
  const reactions = votes.reduce((acc, { label, value }) => {
    acc[label] = value;
    return acc;
  }, {});

  return (
    <div className="container">
      <div id="content" className="content">
      {Object.entries(reactions).map(([emoji, count]) => (
          <ReactionButton key={emoji} emoji={emoji} count={count} />
        ))}
      </div>
    </div>
  );
};

export default ReactionBar;