import React, { useState, useEffect } from "react";
import EmojiButton from "./EmojiButton";
import "../styles/global.css";
import { ReactComponent as BaitIcon } from "../assets/bait.svg";
import { ReactComponent as CatIcon } from "../assets/cat.svg";
import { ReactComponent as DogIcon } from "../assets/dog.svg";
import { ReactComponent as TreeIcon } from "../assets/tree.svg";
import { ReactComponent as UnicornIcon } from "../assets/unicorn.svg";

const icons = [BaitIcon, CatIcon, DogIcon, TreeIcon, UnicornIcon];

const JokeCard = ({ joke, fetchJoke, cardHeight, bgColor }) => {
  const [votes, setVotes] = useState({ like: 0, love: 0, laugh: 0 });
  const [RandomIcon, setRandomIcon] = useState(null);

  useEffect(() => {
    setRandomIcon(icons[Math.floor(Math.random() * icons.length)]);
  }, [joke]); // Change SVG when joke changes

  const handleVote = (type) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  return (
    <div className="card" style={{ height: `${cardHeight}px`, transition: "0.5s ease" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        {RandomIcon && (
          <RandomIcon
            style={{
              width: `${cardHeight * 0.3}px`, 
              height: `${cardHeight * 0.3}px`, 
              fill: bgColor, // Dynamic color
              transition: "0.5s ease",
            }}
          />
        )}
      </div>

      <h1 className="title" style={{ color: bgColor }}>{joke.question}</h1>
      <p className="description">{joke.answer}</p>

      <div className="flex justify-around mt-3">
        <EmojiButton emoji="👍" count={votes.like} onClick={() => handleVote("like")} />
        <EmojiButton emoji="❤️" count={votes.love} onClick={() => handleVote("love")} />
        <EmojiButton emoji="😂" count={votes.laugh} onClick={() => handleVote("laugh")} />
      </div>

      <div className="footer">
        <a onClick={fetchJoke} ripple="" style={{ color: bgColor }}>Prev</a>
        <a onClick={fetchJoke} ripple="" style={{ color: bgColor }}>Next</a>
      </div>
    </div>
  );
};

export default JokeCard;
