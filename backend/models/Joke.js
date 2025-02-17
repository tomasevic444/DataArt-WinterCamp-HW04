import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  question: String,
  answer: String,
  votes: [{ value: Number, label: String }],
  availableVotes: [String]
});

const Joke = mongoose.model("Joke", jokeSchema);
export default Joke; // ✅ Correct ES module export