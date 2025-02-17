import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Ensure the file has a `.js` extension
import Joke from "./models/Joke.js"; // Ensure the file has a `.js` extension

dotenv.config();
await connectDB(); // Use `await` since connectDB is asynchronous

const seedJokes = async () => {
  try {
    await Joke.deleteMany(); // Clear existing jokes

    await Joke.insertMany([
      {
        question: "Why did the developer go broke?",
        answer: "Because he used up all his cache!",
        votes: [],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why do programmers prefer dark mode?",
        answer: "Because light attracts bugs!",
        votes: [],
        availableVotes: ["😂", "👍", "❤️"]
      }
    ]);

    console.log("Jokes Added ✅");
    process.exit(); // Exit script after seeding
  } catch (error) {
    console.error("Seeding Error ❌", error);
    process.exit(1);
  }
};

await seedJokes(); // Ensure `await` for top-level async execution