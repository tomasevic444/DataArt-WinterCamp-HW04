import React, { useEffect, useState } from "react";
import { getJoke } from "../api/fetchJokes";
import JokeCard from "../components/JokeCard";
import "../styles/global.css";

const Home = () => {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    const data = await getJoke();
    if (data) {
      console.log("Setting joke:", data);
      setJoke(data);
    } else {
      console.error("Joke data is null");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="home-container">
      {joke ? <JokeCard joke={joke} fetchJoke={fetchJoke} /> : <p>Loading joke...</p>}
    </div>
  );
};

export default Home;