const todos = [];

const getTodos = () => {
    return todos;
};

module.exports = {
    getTodos,
    createTodo
};

const createTodo = (title) => {
    const todo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };
    todos.push(todo);
    return todo;
}