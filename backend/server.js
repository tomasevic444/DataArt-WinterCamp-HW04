import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; 
import jokeRoutes from "./routes/jokeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

app.use(cors());
app.use(express.json()); 
app.use("/api", jokeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));