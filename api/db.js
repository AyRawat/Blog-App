import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./api/.env" });

export const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URL;
    const conn = await mongoose.connect(dbURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
