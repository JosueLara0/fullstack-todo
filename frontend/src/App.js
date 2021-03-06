import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Form from "./components/form/form.component";
import TodoList from "./components/todo-list/todo-list.component";

import "./App.css";

const App = () => {
  // State
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
    await axios.post("http://localhost:4000/api/v1/todos", todo);
    fetchTodos();
    // setTodos((prevState) => [...prevState, res]);
  };

  const fetchTodos = async () => {
    // TODO: Fetch data from API
    const res = await axios.get("http://localhost:4000/api/v1/todos");
    // console.log(res);
    const resTodos = res.data.data.todos;
    setTodos(resTodos);
  };

  const editTodo = async (id, newContent) => {
    // TODO: Send data to API
    const todoIndex = todos.findIndex((todo) => +todo.id === +id);
    const updatedTodo = todos[todoIndex];
    updatedTodo.content = newContent;
    await axios.patch(`http://localhost:4000/api/v1/todos/${id}`, updatedTodo);
    fetchTodos();
    // setTodos((prevState) => {
    //   const currentTodos = prevState;
    //   const todoIndex = currentTodos.findIndex((todo) => +todo.id === +id);
    //   const updatedTodo = currentTodos[todoIndex];
    //   updatedTodo.content = newContent;
    //   currentTodos[todoIndex] = updatedTodo;
    //   return currentTodos;
    // });
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4000/api/v1/todos/${id}`);
    fetchTodos();
    // setTodos((prevState) => {
    //   const currentTodos = prevState;

    //   const updatedTodos = currentTodos.filter((todo) => +todo.id !== +id);

    //   return [...updatedTodos];
    // });
  };

  // When component is mounted, fetch todos
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app">
      <Form onAddTodo={addTodo} />
      <TodoList onDeleteTodo={deleteTodo} onEditTodo={editTodo} items={todos} />
    </div>
  );
};

export default App;
