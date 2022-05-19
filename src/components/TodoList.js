import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  completeTodo,
} from "../redux/actions";

const TodoList = () => {
  const [todoName, setTodoName] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({ todoName: todoName, id: Math.random(), completed: false })
    );
    setTodoName("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          style={{ width: "250px" }}
          type="text"
          placeholder="Enter Todo Name..."
          id="todoName"
          name="todoName"
          required
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
      <ul>
        {state.todos &&
          state.todos.map((todo) => {
            return (
              <div key={todo.id}>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  todoName={todo.todoName}
                  completed={todo.completed}
                  deleteTodoItem={() => dispatch(deleteTodo(todo))}
                  updateTodoItem={(id, updateTodoName) =>
                    dispatch(updateTodo({ id, updateTodoName }))
                  }
                  toggleTodoItem={() => dispatch(completeTodo(todo))}
                />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
