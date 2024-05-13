import React , { useRef } from 'react'


const TodoItem = (props) => {
  const {item , updateTodo , removeTodo , completeTodo} = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  const update = (id , value , e) => {
    if(e.which === 13){
      //13 is the keyword for enter button on keypad
      updateTodo({id , item:value});
      inputRef.current.disabled = true
    }
  }

  return (
    <li key={item.id}>
        <textarea
          ref={inputRef} 
          disabled={inputRef} 
          defaultValue={item.item} 
          onKeyPress={(e) => update(item.id , inputRef.current.value , e)} 
        ></textarea>
        <div>
          <button onClick={() => changeFocus()}>Edit</button>
          <button onClick={() => completeTodo(item.id)}>complete</button> 
          <button onClick={() => removeTodo(item.id)}>Delete</button> 
        </div>

        {item.completed && <span className='completed'>Done</span>}
    </li>
  )
}

export default TodoItem