const getTodos = (req, res) => {
    const todos = todoService.getTodos();
    res.json(todos);
};

const todoService = require('../services/todo.service');

module.exports = {
    getTodos
};

const createTodo = (req, res) => {
    const { title, description } = req.body;

    const Todo = todoService.createTodo(title);  

    res.json(Todo);
};

const updateTodo = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    const todo = todoService.updateTodo(id, completed);

    res.json(todo);
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo
};
