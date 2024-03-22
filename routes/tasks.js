const express = require('express');
const router = express.Router();
const validateStatus = require('../middlware/validateStatus');

const { getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    getTasksByStatus, } = require('../controllers/tasksController');

router.route('/').get(getAllTasks).post(validateStatus, createTask);
router.route('/:id').get(getTask).put(validateStatus, updateTask).delete(deleteTask);
router.route('/status/:status').get(validateStatus, getTasksByStatus);

module.exports = router;
