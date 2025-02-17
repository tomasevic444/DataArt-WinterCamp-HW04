const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  question: String,
  answer: String,
  votes: [
    { value: Number, label: String }
  ],
  availableVotes: [String]
});

module.exports = mongoose.model("Joke", jokeSchema);