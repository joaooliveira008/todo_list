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

module.exports = {
    getTodos,
    createTodo
};
