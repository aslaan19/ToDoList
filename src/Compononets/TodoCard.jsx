import React from 'react'

export default function TodoCard(props) {
    const {children,removeTask,index} = props
  return (
    <li className='todoItem'>
        {children}
    <div className='actionsContainer'>
    <button onClick={() => {
                    removeTask(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
        <button>
        <i className="fa-solid fa-pen-to-square"></i>

        </button>
    </div>
    </li>
  )
}
