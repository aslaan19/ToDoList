import React from 'react'

export default function TodoInput(props) {
    const {handlUpdateTask,taskvalue,setTaskvalue} = props
    
  return (
    <header>
      <input value={taskvalue} onChange={(e) => {
                setTaskvalue(e.target.value)
            }} placeholder="Enter todo..." /> 
            <button onClick={() => {
                setTaskvalue('')
                handlUpdateTask(taskvalue)
                
            }}>Add</button>
    </header>
  )
}
