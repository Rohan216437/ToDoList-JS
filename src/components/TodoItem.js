import React , { useRef } from 'react'
// import {  } from 'react-icons';
import { MdEdit , MdDeleteForever } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

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
  <AnimatePresence mode="popLayout">
    <motion.li 
      layout
      // initial={{ scale: 0.8, opacity: 0 }}
      
      key={item.id} className={`flex flex-col ${item.completed ? 'bg-green-200' : 'bg-[#E0F7FA]'} m-0 mr-4 mb-4 h-32 w-72 rounded-md p-4 relative`}
      >
      <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
          className={`flex-grow mb-2  ${item.completed ? 'bg-green-200' : 'bg-[#E0F7FA]'} text-black p-2 rounded`}
      ></textarea>
      <div className="flex justify-end gap-2">
          <button onClick={() => changeFocus()} className="p-2 text-sm hover:shadow-md"><MdEdit /></button>
          <button onClick={() => completeTodo(item.id)} className="p-2 text-sm   hover:shadow-md"><SiTicktick /></button>
          <button onClick={() => removeTodo(item.id)} className="p-2 text-lg hover:shadow-md"><MdDeleteForever /></button>
      </div>
      {item.completed && <span className="completed">Done</span>}
    </motion.li>
    </AnimatePresence>

  )
}

export default TodoItem
