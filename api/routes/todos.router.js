// Libraries
const express = require("express");

// Controllers
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");

// Create router
const router = express.Router();

// Fetch all toDos & Create new toDo
router.route("/").get(getAllTodos).post(createTodo);

// Update toDo & Delete toDo
router.route("/:id").get(getTodoById).patch(updateTodo).delete(deleteTodo);

// Fetch all todos
// router.get('/', getAllTodos);

// Create new todo
// router.post('/', createTodo)

// Update todo (patch)
// router.patch('/:id', updateTodo)

// Delete todo (delete)
// router.delete('/:id', deleteTodo)

// export default router in ES6
module.exports = { todosRouter: router };

// export const toDosRouter = router in ES6
// exports.toDosRouter = router;
