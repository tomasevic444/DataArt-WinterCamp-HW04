import React, { useState, useEffect } from "react";
import "../styles/reactionBar.css";

const ReactionButton = ({ jokeId, emoji, count, updateJoke, selectedEmoji, setSelectedEmoji }) => {
  const [emojis, setEmojis] = useState([]);
  const [localCount, setLocalCount] = useState(count);

  const handleClick = async () => {
    if (selectedEmoji === emoji) return; // Prevent multiple votes for the same emoji

    setSelectedEmoji(emoji); // Mark the emoji as selected

    const newEmoji = { id: Date.now(), emoji };
    setEmojis((prev) => [...prev, newEmoji]);

    setTimeout(() => {
      setEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
    }, 2000);

    console.log("Voting for jokeId:", jokeId);

    try {
      console.log("Sending request:", { jokeId, emoji });
      const res = await fetch(`http://localhost:5000/api/joke/${jokeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji }),
        credentials: "include",
      });

      if (res.ok) {
        const updatedJoke = await res.json(); // Get the updated joke
        const updatedVote = updatedJoke.votes.find((v) => v.label === emoji)?.value || 0;
        setLocalCount(updatedVote);
        updateJoke(updatedJoke);
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  useEffect(() => {
    setLocalCount(count); // Reset local count when a new joke is loaded
  }, [count]);

  return (
    <div className="buttonCounter">
      <button
        className={`spawnEmoji button large ${selectedEmoji === emoji ? "selected" : ""}`}
        onClick={handleClick}
      >
        {emoji}
      </button>
      <h2 className="count">[{localCount}]</h2>

      {emojis.map((e) => (
        <span key={e.id} className="emoji fade">{e.emoji}</span>
      ))}
    </div>
  );
};

export default ReactionButton;
