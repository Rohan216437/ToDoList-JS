import React , { useRef } from 'react'
// import {  } from 'react-icons';
import { MdEdit , MdDeleteForever } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

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
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        className="flex-grow mb-2"
    ></textarea>
    <div className="flex justify-end gap-2">
        <button onClick={() => changeFocus()}><MdEdit /></button>
        <button onClick={() => completeTodo(item.id)}><SiTicktick /></button>
        <button onClick={() => removeTodo(item.id)}><MdDeleteForever /></button>
    </div>
    {item.completed && <span className="completed">Done</span>}
</li>

  )
}

export default TodoItem
