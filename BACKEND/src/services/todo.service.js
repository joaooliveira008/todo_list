const db = require('../database/database')


const getTodos = () => {
    const todos = db.prepare('SELECT * FROM todos').all();
    return todos.map(todo => ({
        id: todo.id,
        title: todo.title,
        completed: Boolean(todo.completed)
    }));
};

const updateTodo = (id, completed) => {
    const result = db.prepare(`
        UPDATE todos
        SET completed = ?
        WHERE id = ?
    `).run(completed ? 1 : 0, id);

    if (result.changes === 0) {
        return null;
    }

    const todo = db.prepare(' SELECT * FROM todos WHERE id = ?').get(id);
       
        return {
            id: todo.id,
            title: todo.title,
            completed: Boolean(todo.completed)
    };
};

const createTodo = (title) => {
    const result = db.prepare(`
        INSERT INTO todos (title)
         VALUES (?)
         `).run(title);
    return { id: result.lastInsertRowid, 
        title : title, 
        completed: false };
};

const deleteTodo = (id) => {
    const result = db.prepare(`
        DELETE FROM todos
        WHERE id = ?
    `).run(id);

    if (result.changes === 0) {
        return null;
    }

    return true;
};

    

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    
};
    

    