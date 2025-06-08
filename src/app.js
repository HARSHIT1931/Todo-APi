const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/Todo.routes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

module.exports = app;
