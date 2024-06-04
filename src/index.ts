import express from "express";
import dotenv from "dotenv";
import movieRoute from "./routes/movie.route";
import connectToDatabase from "./db-connection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Express + TypeScript Server" });
});

app.use("/", movieRoute());

app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
