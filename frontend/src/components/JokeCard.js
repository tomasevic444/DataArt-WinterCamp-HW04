import React, { useState, useEffect } from "react";
import ReactionBar from "./ReactionBar";
import "../styles/global.css";
import { ReactComponent as BaitIcon } from "../assets/bait.svg";
import { ReactComponent as CatIcon } from "../assets/cat.svg";
import { ReactComponent as DogIcon } from "../assets/dog.svg";
import { ReactComponent as TreeIcon } from "../assets/tree.svg";
import { ReactComponent as UnicornIcon } from "../assets/unicorn.svg";

const icons = [BaitIcon, CatIcon, DogIcon, TreeIcon, UnicornIcon];

const JokeCard = ({ joke, fetchJoke, cardHeight, bgColor, cardWidth, adminMode, showToast }) => {
  const [currentJoke, setCurrentJoke] = useState(joke);
  const [RandomIcon, setRandomIcon] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null); // Track selected emoji

  const [editedQuestion, setEditedQuestion] = useState(joke.question);
  const [editedAnswer, setEditedAnswer] = useState(joke.answer);

  useEffect(() => {
    setCurrentJoke(joke);
    setRandomIcon(icons[Math.floor(Math.random() * icons.length)]);
    setSelectedEmoji(null); // Reset selected emoji when a new joke is loaded
    setEditedQuestion(joke.question);
    setEditedAnswer(joke.answer);
  }, [joke]);

   // Function to update the joke on the server
  const updateJoke = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/joke/${joke._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: editedQuestion, answer: editedAnswer }),
      });

      if (!response.ok) throw new Error("Failed to update joke");

      const updatedJoke = await response.json();
      setCurrentJoke(updatedJoke);
      showToast("success", "Joke updated successfully!");
    } catch (error) {
      console.error("Error updating joke:", error);
      showToast("error", "Failed to update joke!");
    }
  };
// Function to delete the joke from the server
  const deleteJoke = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/joke/${joke._id}`, { method: "DELETE" });

      if (!response.ok) throw new Error("Failed to delete joke");

      fetchJoke();
      showToast("error", "Joke deleted successfully!");
    } catch (error) {
      console.error("Error deleting joke:", error);
      showToast("error", "Failed to delete joke!");
    }
  };

  return (
    <div
      className="card"
      style={{
        height: Math.max(cardHeight, 300) + "px",
        width: cardWidth + "px",
        transition: "0.5s ease",
      }}
    >
      <div style={{ flexGrow: 1 }}>
        {RandomIcon && (
          <RandomIcon
            style={{
              width: cardHeight * 0.3 + "px",
              height: cardHeight * 0.3 + "px",
              fill: bgColor,
              transition: "0.5s ease",
              display: "block",
              margin: "0 auto 20",
              padding: "",
            }}
          />
        )}
        {adminMode ? (
          <>
            <textarea
              value={editedQuestion}
              onChange={(e) => setEditedQuestion(e.target.value)}
              className="edit-title"
              style={{ color: bgColor }}
            />
            <textarea
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
              className="edit-textarea"
            />
          </>
        ) : (
          <>
            <h1 className="title" style={{ color: bgColor }}>
              {currentJoke.question}
            </h1>
            <p className="description">{currentJoke.answer}</p>
          </>
        )}
      </div>

      <div className="reaction-container">
  <ReactionBar
    jokeId={currentJoke._id}
    votes={currentJoke.votes}
    updateJoke={setCurrentJoke}
    selectedEmoji={selectedEmoji}
    setSelectedEmoji={setSelectedEmoji}
  />
</div>

      <div className="footer">
        {adminMode && (
          <a onClick={deleteJoke} className="btn btn-danger" style={{ color: "red" }}>
            Delete
          </a>
        )}
        <a onClick={fetchJoke} className="center" style={{ color: bgColor }}>
          Next
        </a>
        {adminMode && (
          <a onClick={updateJoke} className="btn btn-warning" style={{ color: bgColor }}>
            Update
          </a>
        )}
      </div>
    </div>
  );
};

export default JokeCard;