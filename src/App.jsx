import { useState } from "react";
import "./App.css";
import TodoInput from "./Compononets/TodoInput";
import TodoList from "./Compononets/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  function handleUpdateTask(newTask) {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setTaskValue("");
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, idx) => idx !== index));
  }

  function updateTask(index, newValue) {
    console.log("Updating task:", index, "New Value:", newValue); // Debugging
    setTasks((prevTasks) =>
      prevTasks.map((task, idx) => (idx === index ? newValue : task))
    );
  }

  return (

    <>
    <h1> <span> KFUPM</span> To Do List</h1>
    
      <TodoInput
        handleUpdateTask={handleUpdateTask}
        taskValue={taskValue}
        setTaskValue={setTaskValue}
      />
      <TodoList tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
    </>
  );
}

export default App;
