const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const todoController = require('../controllers/Todo.controller');


router.use(auth);
router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;