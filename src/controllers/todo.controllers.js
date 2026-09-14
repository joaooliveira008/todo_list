const getTodos = (req, res) => {
    const todos = todoService.getTodos();
    res.json(todos);
};

const todoService = require('../services/todo.service');

module.exports = {
    getTodos
};

const createTodo = (req, res) => {
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: 'Title is required' });
    }

    const todo = todoService.createTodo(title);  

    res.status(201).json(todo);
};

const updateTodo = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    if (typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Completed must be a boolean' });
    } 
    
    
    const todo = todoService.updateTodo(id, completed);

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(todo);
};

const deleteTodo = (req, res) => {
    const { id } = req.params;

    const todo = todoService.deleteTodo(id);


    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(204).send();
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
