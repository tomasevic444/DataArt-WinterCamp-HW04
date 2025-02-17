import React, { useEffect, useState } from "react";
import JokeCard from "../components/JokeCard";
import { getJoke } from "../api/fetchJokes";
import "../styles/global.css";

const Home = () => {
  const [joke, setJoke] = useState(null);
  const [bgColor, setBgColor] = useState("#D18B49");
  const [cardHeight, setCardHeight] = useState(250);

  const generateRandomStyles = () => {
    return {
      bgColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`,
      cardHeight: Math.floor(Math.random() * 200) + 200,
    };
  };

  const fetchJoke = async () => {
    const data = await getJoke();
    if (data) {
      setJoke(data);
      const { bgColor, cardHeight } = generateRandomStyles();
      setBgColor(bgColor);
      setCardHeight(cardHeight);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = ""; 
    };
  }, [bgColor]);

  return (
    <div className="home-container">
      {joke ? (
        <JokeCard joke={joke} fetchJoke={fetchJoke} cardHeight={cardHeight} bgColor={bgColor} />
      ) : (
        <p>Loading joke...</p>
      )}
    </div>
  );
};

export default Home;
