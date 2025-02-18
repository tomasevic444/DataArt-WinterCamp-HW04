import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables
console.log("MONGO_URI:", process.env.MONGO_URI);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected ✅: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error ❌ ${error}`);
    process.exit(1);
  }
};

export default connectDB;