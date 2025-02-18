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
        votes: [{ value: 32, label: "😂" }, { value: 45, label: "👍" }, { value: 28, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why do programmers prefer dark mode?",
        answer: "Because light attracts bugs!",
        votes: [{ value: 40, label: "😂" }, { value: 22, label: "👍" }, { value: 38, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why was the JavaScript developer sad?",
        answer: "Because he didn't 'null' his ex!",
        votes: [{ value: 12, label: "😂" }, { value: 33, label: "👍" }, { value: 27, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why do Python programmers prefer snakes?",
        answer: "Because they love 'self'!",
        votes: [{ value: 35, label: "😂" }, { value: 18, label: "👍" }, { value: 20, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the database administrator break up with his girlfriend?",
        answer: "She had too many relations!",
        votes: [{ value: 50, label: "😂" }, { value: 21, label: "👍" }, { value: 11, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why do C programmers never get lost?",
        answer: "Because they always follow the pointers!",
        votes: [{ value: 19, label: "😂" }, { value: 42, label: "👍" }, { value: 36, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why was the function feeling sad?",
        answer: "It had too many arguments!",
        votes: [{ value: 30, label: "😂" }, { value: 14, label: "👍" }, { value: 23, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the frontend developer break up with the backend developer?",
        answer: "Because they had too many conflicts in their merge!",
        votes: [{ value: 27, label: "😂" }, { value: 39, label: "👍" }, { value: 25, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why was the CSS developer so calm?",
        answer: "Because he always stayed in class!",
        votes: [{ value: 43, label: "😂" }, { value: 12, label: "👍" }, { value: 29, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the Java developer wear glasses?",
        answer: "Because he couldn’t C#!",
        votes: [{ value: 26, label: "😂" }, { value: 44, label: "👍" }, { value: 35, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "What’s a developer’s favorite place to hang out?",
        answer: "The Foo Bar!",
        votes: [{ value: 22, label: "😂" }, { value: 48, label: "👍" }, { value: 31, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the function call break up?",
        answer: "Because it didn't return anything!",
        votes: [{ value: 38, label: "😂" }, { value: 19, label: "👍" }, { value: 17, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why don't programmers like to go outside?",
        answer: "Because the sunlight causes too many glares on their screens!",
        votes: [{ value: 20, label: "😂" }, { value: 37, label: "👍" }, { value: 42, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "How do you comfort a JavaScript bug?",
        answer: "You console it!",
        votes: [{ value: 47, label: "😂" }, { value: 15, label: "👍" }, { value: 22, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the developer go to therapy?",
        answer: "Because he had too many unresolved promises!",
        votes: [{ value: 33, label: "😂" }, { value: 46, label: "👍" }, { value: 30, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why do programmers hate nature?",
        answer: "It has too many bugs!",
        votes: [{ value: 28, label: "😂" }, { value: 41, label: "👍" }, { value: 26, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why don't Java developers wear glasses?",
        answer: "Because they can C#!",
        votes: [{ value: 35, label: "😂" }, { value: 24, label: "👍" }, { value: 39, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "What did the developer say to his broken code?",
        answer: "You need to get yourself together!",
        votes: [{ value: 14, label: "😂" }, { value: 29, label: "👍" }, { value: 45, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the backend developer always feel left out?",
        answer: "Because nobody ever saw him!",
        votes: [{ value: 48, label: "😂" }, { value: 16, label: "👍" }, { value: 23, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why do programmers never play hide and seek?",
        answer: "Because good luck hiding when you always leave a stack trace!",
        votes: [{ value: 37, label: "😂" }, { value: 50, label: "👍" }, { value: 40, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the developer quit his job?",
        answer: "He didn’t get arrays!",
        votes: [{ value: 29, label: "😂" }, { value: 35, label: "👍" }, { value: 22, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why do Java programmers wear glasses?",
        answer: "Because they don't C#!",
        votes: [{ value: 41, label: "😂" }, { value: 19, label: "👍" }, { value: 28, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the developer refuse to use a map?",
        answer: "Because he didn't want to lose his keys!",
        votes: [{ value: 36, label: "😂" }, { value: 48, label: "👍" }, { value: 30, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the programmer go to art school?",
        answer: "Because he wanted to learn how to handle exceptions creatively!",
        votes: [{ value: 20, label: "😂" }, { value: 33, label: "👍" }, { value: 47, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "What did the array say after being asked out?",
        answer: "I'm not sure, I need to sort my feelings!",
        votes: [{ value: 25, label: "😂" }, { value: 44, label: "👍" }, { value: 39, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why do programmers love UNIX?",
        answer: "Because it's user-friendly… it's just picky about who its friends are!",
        votes: [{ value: 31, label: "😂" }, { value: 27, label: "👍" }, { value: 42, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why was the software developer bad at relationships?",
        answer: "Because he always had too many dependencies!",
        votes: [{ value: 50, label: "😂" }, { value: 24, label: "👍" }, { value: 18, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why did the JavaScript developer go to therapy?",
        answer: "Because he had callback issues!",
        votes: [{ value: 22, label: "😂" }, { value: 37, label: "👍" }, { value: 31, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "Why don't programmers like to talk to their friends about their code?",
        answer: "Because it's a private function!",
        votes: [{ value: 46, label: "😂" }, { value: 26, label: "👍" }, { value: 38, label: "❤️" }],
        availableVotes: ["😂", "👍", "❤️"]
      },
      {
        question: "How do you know if a programmer is introverted?",
        answer: "They look at your shoes instead of their own when talking!",
        votes: [{ value: 34, label: "😂" }, { value: 50, label: "👍" }, { value: 21, label: "❤️" }],
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