const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;

// Cors configuration - Allows requests from localhost:4200
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 204,
  methods: "GET, POST, PUT, DELETE",
};

// Use cors middleware
app.use(cors(corsOptions));

// Use express.json() middleware to parse JSON bodies of requests
app.use(express.json());

// GET route - Allows to get all the exercises
app.get("/exercises", (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const pageSize = parseInt(req.query.pageSize) || 1000;

  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);

    const start = page * pageSize;
    const end = start + pageSize;

    const result = jsonData.exercises.slice(start, end);

    res.status(200).json({
      exercises: result,
      total: jsonData.exercises.length,
      page,
      pageSize,
      totalPages: Math.ceil(jsonData.exercises.length / pageSize),
    });
  });
});

// POST route - Allows to add a new exercise
app.post("/exercises", (req, res) => {
  const { name, category, gifUrl, description } = req.body;

  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);

    const maxId = Math.max(...jsonData.exercises.map((exercise) => exercise.id));

    const newExercise = {
      id: maxId + 1,
      name,
      category,
      gifUrl,
      description,
    };

    jsonData.exercises.push(newExercise);

    fs.writeFile("db.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.status(201).json(newExercise);
    });
  });
});

// Other routes for PUT and DELETE can be added similarly

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
