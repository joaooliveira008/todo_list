const Database = require('better-sqlite3');

const path = require('path');

const db = new Database(
    
    path.join(__dirname, 'todo.db'));

db.prepare(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER NOT NULL DEFAULT 0
)`).run();

module.exports = db;