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
      <button onClick={() => changeFocus()}>Edit</button>
      <button onClick={() => props.completeTodo(item.id)}>complete</button> 
      <button onClick={() => props.removeTodo(item.id)}>Delete</button> 
    </li>
  )
}

export default TodoItem