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
    <li key={item.id} className="flex flex-col bg-[#F3F5F6] m-0 mr-4 mb-4 h-32 w-72 rounded-md p-4 relative">
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
