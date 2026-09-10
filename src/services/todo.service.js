const todos = [];

const getTodos = () => {
    return todos;
};

const updateTodo = (id, completed) => {
    const todo = todos.find(todo => todo.id === Number(id));
    if (todo) {
        todo.completed = completed;
    }
    return todo;
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

module.exports = {
    getTodos,
    createTodo
};