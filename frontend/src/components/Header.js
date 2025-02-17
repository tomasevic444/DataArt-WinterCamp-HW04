import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Voting Game 🎭</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
      </nav>
    </header>
  );
};

export default Header;