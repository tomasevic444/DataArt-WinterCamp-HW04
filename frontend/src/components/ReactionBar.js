import React from "react";
import ReactionButton from "./ReactionButton";
import "../styles/reactionBar.css";

const ReactionBar = ({ jokeId, votes, updateJoke, selectedEmoji, setSelectedEmoji }) => {
  return (
    <div className="container">
      <div id="content" className="content">
        {votes.map(({ label, value }) => (
          <ReactionButton
            key={label}
            jokeId={jokeId}
            emoji={label}
            count={value}
            updateJoke={updateJoke}
            selectedEmoji={selectedEmoji}
            setSelectedEmoji={setSelectedEmoji}
          />
        ))}
      </div>
    </div>
  );
};

export default ReactionBar;
