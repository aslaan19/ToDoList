import { useState } from 'react'
import './App.css'
import TodoInput from './Compononets/TodoInput'
import TodoList from './Compononets/TodoList'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskvalue, setTaskvalue] = useState('')

  function handlUpdateTask(newTask) {  
    if (newTask.trim() !== '') {  
      setTasks([...tasks, newTask])  
      setTodoValue('')
    }
  }
  function removeTask(index){
    const newtasks = tasks.filter((task,idx)=>{
      return(idx !==index)
    })
    setTasks(newtasks)
  }

  return (
    <>
      <TodoInput handlUpdateTask={handlUpdateTask} taskvalue={taskvalue} setTaskvalue={setTaskvalue} />
      <TodoList tasks={tasks} removeTask={removeTask}/>
    </>
  )
}

export default App
