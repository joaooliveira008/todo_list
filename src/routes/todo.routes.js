const express = require('express');

const router = express.Router();

const { getTodos, createTodo,updateTodo, deleteTodo } = require('../controllers/todo.controllers.js');

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.patch('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;