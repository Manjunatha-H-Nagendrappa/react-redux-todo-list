import React, { useState } from "react";
import "../App.css";

const Todo = ({
  id,
  todoName,
  completed,
  toggleTodoItem,
  deleteTodoItem,
  updateTodoItem,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoName, setEditTodoName] = useState(todoName);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodoItem(id, editTodoName);
    setIsEditing(false);
  };

  return (
    <div>
      <div className={completed ? "completed" : ""}>
        {isEditing ? (
          <div>
            <form onSubmit={(e) => handleUpdate(e)}>
              <input
                type="text"
                name="editTodoName"
                placeholder="Enter Todo Name..."
                required
                value={editTodoName}
                onChange={(e) => setEditTodoName(e.target.value)}
              />
              <button>Update</button>
            </form>
          </div>
        ) : (
          <div>
            <h3 onClick={toggleTodoItem}>{todoName}</h3>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={deleteTodoItem}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
