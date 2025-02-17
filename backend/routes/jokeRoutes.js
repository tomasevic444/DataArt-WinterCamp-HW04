import express from "express";
import { getRandomJoke, voteJoke } from "../controllers/jokeController.js";

const router = express.Router();

// Fetch a random joke
router.get("/joke", getRandomJoke);

// Vote for a joke
router.post("/joke/:id", voteJoke);


export default router;