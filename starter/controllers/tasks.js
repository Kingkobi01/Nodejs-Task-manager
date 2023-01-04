const Task = require("../model/Task");

const getAllTasks = async (req, res) => {
  // res.send("Here are all the tasks from the file for you postman...");
  try {
    const tasks = await Task.find();
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    res.status(201).json(task);

    if (!task) {
      res.status(404).json({ message: `No task found with the id of ${id}` });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { body } = req;
    const task = await Task.create(body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateTask = (req, res) => {
  const { body } = req;
  const { id } = req.params;

  res.json({
    id: id,
    body: body,
  });
};
const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
