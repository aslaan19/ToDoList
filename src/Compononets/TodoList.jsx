import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {
  const {tasks,removeTasks} = props
    
    return (
    <ul className='main'>
      {tasks.map((task,idx)=>{
        return(
            <TodoCard {...props} key={idx} index={idx}>
                <p>{task}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}
