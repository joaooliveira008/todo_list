const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes.js');
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json()); 
app.use(todoRoutes);

app.listen (port, () => {
  console.log(`Server is running on port 3000 ${port}`);
});