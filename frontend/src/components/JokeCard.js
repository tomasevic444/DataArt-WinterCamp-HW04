import React, { useState, useEffect } from "react";

import ReactionBar from "./ReactionBar";
import "../styles/global.css";
import { ReactComponent as BaitIcon } from "../assets/bait.svg";
import { ReactComponent as CatIcon } from "../assets/cat.svg";
import { ReactComponent as DogIcon } from "../assets/dog.svg";
import { ReactComponent as TreeIcon } from "../assets/tree.svg";
import { ReactComponent as UnicornIcon } from "../assets/unicorn.svg";

const icons = [BaitIcon, CatIcon, DogIcon, TreeIcon, UnicornIcon];

const JokeCard = ({ joke, fetchJoke, cardHeight, bgColor,cardWidth }) => {
  const [RandomIcon, setRandomIcon] = useState(null);
  const [selectedReaction, setSelectedReaction] = useState(null);
  useEffect(() => {
    setRandomIcon(icons[Math.floor(Math.random() * icons.length)]);
  }, [joke]); // Change SVG when joke changes

  const handleReaction = (reaction) => {
    setSelectedReaction(reaction);
    console.log("User reacted with:", reaction);
  };

  return (
    <div className="card" style={{ height: `${Math.max(cardHeight, 300)}px`, width: `${cardWidth}px`,  transition: "0.5s ease" }}>
      <div style={{ flexGrow: 1 }}>
        {RandomIcon && (
          <RandomIcon
            style={{
              width: `${cardHeight * 0.3}px`,
              height: `${cardHeight * 0.3}px`,
              fill: bgColor,
              transition: "0.5s ease",
            }}
          />
        )}
        <h1 className="title" style={{ color: bgColor }}>{joke.question}</h1>
        <p className="description">{joke.answer}</p>
      </div>
  
      <ReactionBar onReact={handleReaction} />
      <div className="footer">
        <a onClick={fetchJoke} style={{ color: bgColor }}>Prev</a>
        <a onClick={fetchJoke} style={{ color: bgColor }}>Next</a>
      </div>
    </div>
  );
};

export default JokeCard;
