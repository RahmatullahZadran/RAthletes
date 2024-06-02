const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/exercises", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const exerciseSchema = new mongoose.Schema({
  name: String,
  category: String,
  gifUrl: String,
  description: String,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

// Cors configuration
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 204,
  methods: "GET, POST, PUT, DELETE",
};

app.use(cors(corsOptions));
app.use(express.json());

// GET route
app.get("/exercises", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const pageSize = parseInt(req.query.pageSize) || 1000;

    const exercises = await Exercise.find()
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Exercise.countDocuments();

    res.status(200).json({
      exercises,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// POST route
app.post("/exercises", async (req, res) => {
  try {
    const { name, category, gifUrl, description } = req.body;

    const newExercise = new Exercise({
      name,
      category,
      gifUrl,
      description,
    });

    await newExercise.save();

    res.status(201).json(newExercise);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
