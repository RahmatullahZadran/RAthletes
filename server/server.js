const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable if provided, otherwise use port 3000

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/exercisesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Exercise Schema
const exerciseSchema = new mongoose.Schema({
  name: String,
  category: String,
  gifUrl: String,
  description: String,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

// Middleware
app.use(express.json());

// GET route - Get all exercises
app.get("/exercises", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// POST route - Add a new exercise
app.post("/exercises", async (req, res) => {
  const { name, category, gifUrl, description } = req.body;

  try {
    const newExercise = await Exercise.create({
      name,
      category,
      gifUrl,
      description,
    });
    res.status(201).json(newExercise);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Other routes for PUT and DELETE can be added similarly

// Start the server
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
