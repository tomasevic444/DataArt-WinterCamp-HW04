import React, { useEffect, useState } from "react";
import JokeCard from "../components/JokeCard";
import { getJoke } from "../api/fetchJokes";
import AdminButton from "../components/AdminButton"; 
import ToastNotification from "../components/ToastNotifications"; // Ensure this path is correct
import "../styles/global.css";


const Home = () => {
  const [joke, setJoke] = useState(null);
  const [bgColor, setBgColor] = useState("#D18B49");
  const [cardHeight, setCardHeight] = useState(450);
  const [cardWidth, setCardWidth] = useState(350);
  const [adminMode, setAdminMode] = useState(false); // Track Admin Mode
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const toggleAdminMode = () => {
    setAdminMode((prev) => !prev);
  };

  const generateRandomStyles = () => ({
    bgColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
    cardHeight: Math.floor(Math.random() * 150) + 500,
    cardWidth: Math.floor(Math.random() * 150) + 400,
  });

  const fetchJoke = async () => {
    const data = await getJoke();
    if (data) {
      setJoke(data);
      const { bgColor, cardHeight, cardWidth } = generateRandomStyles();
      setBgColor(bgColor);
      setCardHeight(cardHeight);
      setCardWidth(cardWidth);
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

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
  };

  return (
    <div className="home-container">
      <AdminButton adminMode={adminMode} toggleAdminMode={toggleAdminMode} />
      {joke ? (
        <JokeCard 
          joke={joke} 
          fetchJoke={fetchJoke} 
          cardHeight={cardHeight} 
          bgColor={bgColor} 
          cardWidth={cardWidth}
          adminMode={adminMode} 
          showToast={showToast} 
        />
      ) : (
        <p>Loading joke...</p>
      )}
      {toast.show && <ToastNotification type={toast.type} message={toast.message} onClose={() => setToast({ show: false })} />}
    </div>
    
  );
};

export default Home;