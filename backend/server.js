import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session"; // Import session
import connectDB from "./config/db.js"; 
import jokeRoutes from "./routes/jokeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Apply JSON parsing after CORS
app.use(express.json());
// 🛠️ Set up session middleware
app.use(session({
    // if u want run this comand node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" 
  // and put it in env to use it as real secret key to to protects agains attacks, ensures data integrity and prevents session tempering
  secret: "your-actual-random-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true, sameSite: "lax" }
}));
app.use("/api", jokeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));