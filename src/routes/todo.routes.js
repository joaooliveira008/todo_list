const express = require('express');

const router = express.Router();

const updateTodo = (req, res) =>{
    const { id } = req.params;
    const { completed } = req.body;

    const todo = todoService.updateTodo(id, completed);

    res.json(todo);
};

const { getTodos, createTodo,updateTodo } = require('../controllers/todo.controllers.js');

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.patch('/todos/:id', updateTodo);

module.exports = router;