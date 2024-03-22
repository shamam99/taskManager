const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const tasksFilePath = path.join(__dirname, '..', 'Task.json');

function readTasksFile() {
  return JSON.parse(fs.readFileSync(tasksFilePath, 'utf8'));
}

function writeTasksFile(data) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(data, null, 2), 'utf8');
}


//@des Get all tasks
//@route Get all tasks
//@access Public
const getAllTasks = (req, res) => {
  const tasks = readTasksFile();
  res.status(200).json(tasks);
};


//@des Get a task
//@route Get tasks/:id
//@access Public
const getTask = (req, res) => {
  const tasks = readTasksFile();
  const task = tasks[req.params.id];
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
};


//@des Create a tasks
//@route Create tasks/:id
//@access Public
const createTask = (req, res) => {
  const { title, description, dueDate } = req.body;
  let { status } = req.body;
  status = status || 'Pending'; 

  if (!title || !description || !dueDate) {
      return res.status(400).json({ message: 'Please fill in all required fields: title, description, and dueDate.' });
  }

  const tasks = readTasksFile();
  const id = uuidv4();
  const newTask = { id, title, description, status, dueDate };
  tasks[id] = newTask;
  writeTasksFile(tasks);
  res.status(201).json(newTask);
};


//@des Update a tasks
//@route Update tasks/:id
//@access Public
const updateTask = (req, res) => {
  const { title, description, dueDate } = req.body;
  let { status } = req.body; 

  if (!title || !description || !dueDate) {
      return res.status(400).json({ message: 'Title, description, and due date are required' });
  }

  const tasks = readTasksFile();
  const task = tasks[req.params.id];
  if (!task) {
      return res.status(404).json({ message: 'Task not found' });
  }

  const updatedTask = { ...task, title, description, status, dueDate };
  tasks[req.params.id] = updatedTask;
  writeTasksFile(tasks);
  res.json(updatedTask);
};

//@des Delete a tasks
//@route Delete tasks/:id
//@access Public
const deleteTask = (req, res) => {
  const tasks = readTasksFile();
  const task = tasks[req.params.id];
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  delete tasks[req.params.id];
  writeTasksFile(tasks);
  res.status(200).json({ message: 'the task deleted' });
};

//@des Get a taskStatus
//@route Get tasks/status/:id
//@access Public
const getTasksByStatus = (req, res) => {
  const tasks = readTasksFile();
  const statusQuery = req.params.status;

  const filteredTasks = Object.values(tasks).filter(task => task.status === statusQuery);
  if (!filteredTasks.length) {
      return res.status(404).json({ message: 'No tasks found with the specified status' });
  }
  res.status(200).json(filteredTasks);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTasksByStatus,
};