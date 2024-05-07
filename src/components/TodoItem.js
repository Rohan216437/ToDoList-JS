import React from 'react'

const TodoItem = () => {
  return (
    <li key={item.id}>
        <textarea
          ref={inputRef} 
          disabled={inputRef} 
          defaultValue={item.item} 
          onKeyPress={(e) => update(item.id , inputRef.current.value , e)} 
        ></textarea>
      
    </li>
  )
}

export default TodoItem