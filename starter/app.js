const express = require("express");
const app = express();
const PORT = 3000;

const tasks = require("./routers/tasks");
require("dotenv").config();
// middlewares
app.use(express.json());

const connectDB = require("./db/connect");
// routes
/*
app.get('.../tasks') - Get all tasks
app.put('.../tasks') - Create a task
app.get('.../tasks/:id') - Get a single task
app.patch('.../tasks/:id') - Update a single task
app.delete('.../tasks/:id') - Delete a single task
 */

// app.get("/api/v1/tasks", (req, res) => {});

app.use("/api/v1/tasks", tasks);

// app.get("/hello", (req, res) => {
//   res.send("Welcome to my webserver...");
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Listening to port : ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
