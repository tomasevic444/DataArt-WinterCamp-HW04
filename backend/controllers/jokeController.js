import Joke from "../models/Joke.js";

// Get a random joke
export const getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.countDocuments();
    const random = Math.floor(Math.random() * count);
    const joke = await Joke.findOne().skip(random);
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Vote on a joke
export const voteJoke = async (req, res) => {
  const { emoji } = req.body;

  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) return res.status(404).json({ message: "Joke not found" });

    const vote = joke.votes.find(v => v.label === emoji);
    if (vote) vote.value += 1;
    else joke.votes.push({ label: emoji, value: 1 });

    await joke.save();
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
