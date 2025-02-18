import React, { useState, useEffect } from "react";
import ReactionBar from "./ReactionBar";
import "../styles/global.css";
import { ReactComponent as BaitIcon } from "../assets/bait.svg";
import { ReactComponent as CatIcon } from "../assets/cat.svg";
import { ReactComponent as DogIcon } from "../assets/dog.svg";
import { ReactComponent as TreeIcon } from "../assets/tree.svg";
import { ReactComponent as UnicornIcon } from "../assets/unicorn.svg";

const icons = [BaitIcon, CatIcon, DogIcon, TreeIcon, UnicornIcon];

const JokeCard = ({ joke, fetchJoke, cardHeight, bgColor, cardWidth }) => {
  const [currentJoke, setCurrentJoke] = useState(joke);
  const [RandomIcon, setRandomIcon] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  useEffect(() => {
    setCurrentJoke(joke);
    setRandomIcon(icons[Math.floor(Math.random() * icons.length)]);
    setSelectedEmoji(null); // Reset selected emoji when loading a new joke
  }, [joke]);

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
        <h1 className="title" style={{ color: bgColor }}>
          {currentJoke.question}
        </h1>
        <p className="description">{currentJoke.answer}</p>
      </div>

      <ReactionBar
        jokeId={currentJoke._id}
        votes={currentJoke.votes}
        updateJoke={setCurrentJoke}
        selectedEmoji={selectedEmoji}
        setSelectedEmoji={setSelectedEmoji}
      />

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
