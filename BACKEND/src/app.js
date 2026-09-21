const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('./routes/todo.routes.js');
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json()); 
app.use(cors());
app.use(todoRoutes);

app.listen (port, () => {
  console.log(`Server is running on port 3000 ${port}`);
});