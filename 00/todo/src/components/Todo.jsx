import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="Todo">
              <div className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
                
              </div>
              <div>
                <button className='complete'>Completar</button>
                <button className='remove'>❌</button>
                </div>              
              <span>{todo.text} - <em>{todo.category}</em></span>
            </div>
  )
}

export default Todo