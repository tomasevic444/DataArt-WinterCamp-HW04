import Joke from "../models/Joke.js";
import mongoose from "mongoose";

// Fetch a random joke
export const getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.countDocuments();
    const random = Math.floor(Math.random() * count);
    const joke = await Joke.findOne().skip(random);
    if (!joke) return res.status(404).json({ message: "No jokes found" });
    res.json(joke);
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Vote for a joke
export const voteJoke = async (req, res) => {
  const { emoji } = req.body;
  const jokeId = mongoose.Types.ObjectId.createFromHexString(req.params.id);
  try {
    const joke = await Joke.findById(jokeId);
    if (!joke) return res.status(404).json({ message: "Joke not found" });

    // Ensure session object exists
    if (!req.session.votedJokes) {
      req.session.votedJokes = {};
    }

    // Ensure votedJokes[jokeId] is an array before checking includes
    if (!Array.isArray(req.session.votedJokes[jokeId])) {
      req.session.votedJokes[jokeId] = [];
    }

    // Prevent duplicate voting for the same emoji on the same joke
    if (req.session.votedJokes[jokeId].includes(emoji)) {
      return res.status(400).json({ message: "You already voted for this emoji on this joke." });
    }

    // Store user's vote in session
    req.session.votedJokes[jokeId].push(emoji);

    // Update joke votes
    const vote = joke.votes.find(v => v.label === emoji);
    if (vote) vote.value += 1;
    else joke.votes.push({ label: emoji, value: 1 });

    await joke.save();
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Delete a joke
export const deleteJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndDelete(req.params.id);
    if (!joke) return res.status(404).json({ message: "Joke not found" });
    res.json({ message: "Joke deleted successfully" });
  } catch (error) {
    console.error("Error deleting joke:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a joke
export const updateJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const joke = await Joke.findByIdAndUpdate(
      req.params.id,
      { question, answer },
      { new: true, runValidators: true }
    );
    if (!joke) return res.status(404).json({ message: "Joke not found" });
    res.json(joke);
  } catch (error) {
    console.error("Error updating joke:", error);
    res.status(500).json({ message: "Server Error" });
  }
};