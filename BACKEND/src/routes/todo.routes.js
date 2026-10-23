const express = require('express');

const router = express.Router();

const { getTodos, createTodo,updateTodo, deleteTodo } = require('../controllers/todo.controllers.js');

router.get('/todo', getTodos);
router.post('/todo', createTodo);
router.patch('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

module.exports = router;