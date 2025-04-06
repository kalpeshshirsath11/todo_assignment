const express = require('express');
const router = express.Router();
const { verify } = require('../middleware/auth.middleware'); // Ensure this exists
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller');

router.route('/')
  .get(verify, getTasks)
  .post(verify, createTask);

router.route('/:id')
  .put(verify, updateTask)
  .delete(verify, deleteTask);

module.exports = router;