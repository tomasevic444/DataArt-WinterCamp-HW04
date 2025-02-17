import React, { useState } from "react";
import EmojiButton from "./EmojiButton";
import "../styles/global.css";
const JokeCard = ({ joke, fetchJoke }) => {
  const [votes, setVotes] = useState({ like: 0, love: 0, laugh: 0 });

  const handleVote = (type) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  return (
    <div className="card">
      <h1 className="title">{joke.question}</h1>
      <p className="description">{joke.answer}</p>

      <div className="flex justify-around mt-3">
        <EmojiButton emoji="👍" count={votes.like} onClick={() => handleVote("like")} />
        <EmojiButton emoji="❤️" count={votes.love} onClick={() => handleVote("love")} />
        <EmojiButton emoji="😂" count={votes.laugh} onClick={() => handleVote("laugh")} />
      </div>

      <div className="footer">
        <a onClick={fetchJoke} ripple="" ripple-color="#666666">
          Prev
        </a>
        <a onClick={fetchJoke} ripple="" ripple-color="#666666">
          Next
        </a>
      </div>
    </div>
  );
};

export default JokeCard;