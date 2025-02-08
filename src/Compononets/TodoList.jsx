import React, { useState } from "react";

function TodoList({ tasks, removeTask, updateTask }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Enable edit mode
  const startEditing = (index, task) => {
    setEditingIndex(index);
    setEditValue(task);
  };

  // Save edited task
  const saveEdit = (index) => {
    if (editValue.trim()) {
      console.log("Saving Edit:", editValue); // Debugging
      updateTask(index, editValue);
    }
    setEditingIndex(null);
  };

  return (
    <ul className="main">
      {tasks.map((task, idx) => (
        <li key={idx} className="todoItem">
          {editingIndex === idx ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveEdit(idx)}
                className="edit-input"
              />
              <button onClick={() => saveEdit(idx)}>💾 Save</button>
            </>
          ) : (
            <>
              <p>{task}</p>
              <div className="actionsContainer">
                <button onClick={() => startEditing(idx, task)}>✏️ Edit</button>
                <button onClick={() => removeTask(idx)}>❌ Remove</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
