import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

mongoose.Promise = global.Promise;
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("No MONGODB_URI in .env file provided");
  process.exit(1);
}

const connectToDatabase = async (): Promise<void> => {
  try {
    const options: ConnectOptions = {};

    await mongoose.connect(MONGODB_URI, options);

    console.log("[db]: Connected to the database");
  } catch (error) {
    console.log("[db]: Error connecting to the database: ", error);
  }
};

export default connectToDatabase;
