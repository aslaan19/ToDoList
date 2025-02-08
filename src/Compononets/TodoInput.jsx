import React from 'react';

export default function TodoInput(props) {
  const { handleUpdateTask, taskValue, setTaskValue } = props; // Fix typo here

  return (
    <header>
      <input
        value={taskValue}
        onChange={(e) => {
          setTaskValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          setTaskValue('');
          handleUpdateTask(taskValue); // Fix typo here
        }}
      >
        Add
      </button>
    </header>
  );
}
