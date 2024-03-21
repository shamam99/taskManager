const express = require('express');
const router = express.Router();

const { getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    getTasksByStatus, } = require('../controllers/tasksController');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);
router.route('/status/:status').get(getTasksByStatus);

module.exports = router;
