import express from "express";
import { getRandomJoke, voteJoke } from "../controllers/jokeController.js";

const router = express.Router();

router.get("/joke", getRandomJoke);
router.post("/joke/:id", voteJoke);

export default router;