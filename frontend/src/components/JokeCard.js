import React, { useState, useEffect } from "react";
import ReactionBar from "./ReactionBar";
import "../styles/global.css";
import { ReactComponent as BaitIcon } from "../assets/bait.svg";
import { ReactComponent as CatIcon } from "../assets/cat.svg";
import { ReactComponent as DogIcon } from "../assets/dog.svg";
import { ReactComponent as TreeIcon } from "../assets/tree.svg";
import { ReactComponent as UnicornIcon } from "../assets/unicorn.svg";

const icons = [BaitIcon, CatIcon, DogIcon, TreeIcon, UnicornIcon];

const JokeCard = ({ joke, fetchJoke, cardHeight, bgColor, cardWidth, adminMode }) => {
  const [currentJoke, setCurrentJoke] = useState(joke);
  const [RandomIcon, setRandomIcon] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(joke.question);
  const [editedAnswer, setEditedAnswer] = useState(joke.answer);

  useEffect(() => {
    setCurrentJoke(joke);
    setRandomIcon(icons[Math.floor(Math.random() * icons.length)]);
    setSelectedEmoji(null);
    setEditedQuestion(joke.question);
    setEditedAnswer(joke.answer);
  }, [joke]);

  // Handle Joke Update
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
      setEditMode(false);
    } catch (error) {
      console.error("Error updating joke:", error);
    }
  };

  // Handle Joke Deletion
  const deleteJoke = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/joke/${joke._id}`, { method: "DELETE" });

      if (!response.ok) throw new Error("Failed to delete joke");

      fetchJoke(); // Fetch a new joke after deletion
    } catch (error) {
      console.error("Error deleting joke:", error);
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
            }}
          />
        )}
        {editMode ? (
          <>
            <input
              type="text"
              value={editedQuestion}
              onChange={(e) => setEditedQuestion(e.target.value)}
              className="edit-input"
            />
            <textarea
              value={editedAnswer}
              onChange={(e) => setEditedAnswer(e.target.value)}
              className="edit-input"
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

      <ReactionBar
        jokeId={currentJoke._id}
        votes={currentJoke.votes}
        updateJoke={setCurrentJoke}
        selectedEmoji={selectedEmoji}
        setSelectedEmoji={setSelectedEmoji}
      />

      {/* Show Admin Buttons if Admin Mode is enabled */}
      {adminMode && (
        <div className="admin-controls">
          {editMode ? (
            <button onClick={updateJoke} className="save-button">Save</button>
          ) : (
            <button onClick={() => setEditMode(true)} className="edit-button">Edit</button>
          )}
          <button onClick={deleteJoke} className="delete-button">Delete</button>
        </div>
      )}

      <div className="footer">
        <a onClick={fetchJoke} style={{ color: bgColor }}>
          Prev
        </a>
        <a onClick={fetchJoke} style={{ color: bgColor }}>
          Next
        </a>
      </div>
    </div>
  );
};

export default JokeCard;
