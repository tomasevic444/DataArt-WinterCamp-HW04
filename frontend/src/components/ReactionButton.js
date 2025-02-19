import React, { useState, useEffect } from "react";
import "../styles/reactionBar.css";

const ReactionButton = ({ jokeId, emoji, count, updateJoke, selectedEmoji, setSelectedEmoji }) => {
  const [emojis, setEmojis] = useState([]);
  const [localCount, setLocalCount] = useState(count);
  const [isSelected, setIsSelected] = useState(false); // Track if the button is selected
  // Effect to check if the user has already voted for this emoji
  useEffect(() => {
    const storedValue = localStorage.getItem(`voted_${jokeId}`);
    let votedEmojis = [];
  
    try {
      votedEmojis = storedValue ? JSON.parse(storedValue) : [];
      if (typeof votedEmojis === "string") {
        // If it was previously stored as a single string, convert it to an array
        votedEmojis = [votedEmojis];
      }
    } catch (error) {
      console.error("Error parsing voted emojis:", error);
      votedEmojis = []; // Reset if parsing fails
    }
  
    setIsSelected(votedEmojis.includes(emoji));
  }, [jokeId, emoji]);
   // Function to handle emoji click (vote)
  const handleClick = async () => {
    if (isSelected) return;
  
    setIsSelected(true);
  
    const newEmoji = { id: Date.now(), emoji };
    setEmojis((prev) => [...prev, newEmoji]);
  
    setTimeout(() => {
      setEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
    }, 2000);
  
    try {
      // Send vote to the server
      const res = await fetch(`http://localhost:5000/api/joke/${jokeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji }),
        credentials: "include",
      });
  
      if (res.ok) {
        const updatedJoke = await res.json();
        const updatedVote = updatedJoke.votes.find((v) => v.label === emoji)?.value || 0;
        setLocalCount(updatedVote);
        updateJoke(updatedJoke);
  
        // Get existing voted emojis and ensure it's an array
        const storedValue = localStorage.getItem(`voted_${jokeId}`);
        let votedEmojis = [];
  
        try {
          votedEmojis = storedValue ? JSON.parse(storedValue) : [];
          if (typeof votedEmojis === "string") {
            votedEmojis = [votedEmojis];
          }
        } catch {
          votedEmojis = [];
        }
  
        if (!votedEmojis.includes(emoji)) {
          votedEmojis.push(emoji);
          localStorage.setItem(`voted_${jokeId}`, JSON.stringify(votedEmojis));
        }
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
        className={`spawnEmoji button large ${isSelected ? "selected" : ""}`} // Apply "selected" class if the button is selected
        onClick={handleClick}
        disabled={isSelected} // Disable the button if already voted
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