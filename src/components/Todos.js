import React , { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer'

const mapStateToProps = (state) => {
  return {
    todos : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo : (id) => dispatch(removeTodos(id)),
    updateTodo : (obj) => dispatch(updateTodos(obj)),
    completeTodo : (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  // const inputRef = useRef(true);

  
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  // console.log("todo text consoled here --->>>" , props)

  // const changeFocus = () => {
  //   inputRef.current.disabled = false;
  //   inputRef.current.focus();
  // }

  // const update = (id , value , e) => {
  //   if(e.which === 13){
  //     //13 is the keyword for enter button on keypad
  //     props.updateTodo({id , item:value});
  //     inputRef.current.disabled = true
  //   }
  // }

  
  return (
    <div className='flex flex-row justify-center'>
      <form action="#" class="mt-4">
        <div class="flex flex-col items-center mt-1 text-sm sm:flex-row sm:space-y-0 sm:space-x-4">
          <div class="w-full sm:mb-2">
            <label for="input1">
              <span class="ml-2 text-sm text-white sm:text-base ">Add you Todo's !!</span>
                <input id="input1" minlength="5" className="mt-1 py-3 px-5 w-full border-2 border-white rounded-2xl outline-none placeholder:text-gray-400 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-skyblue-500 peer dark:bg-white dark :text-gray-200 dark:placeholder:text-gray-300 dark:invalid:text-rose-600 dark:border-gray-400 shadow-md"
                type="text" value={todo} onChange={(e) => {handleChange(e)}} placeholder="Type something" />
              <p class="ml-2 text-xs text-pink-700 invisible peer-invalid:visible dark:text-gray-200">less than 5 characters</p>
          </label>
        </div>
        <div 
          class="w-full text-center py-3 px-8 text-sm font-medium bg-cyan-800 text-gray-100 rounded-2xl cursor-pointer sm:w-min hover:bg-cyan-900 hover:text-gray-50  dark:text-gray-100 dark:hover:text-gray-50 mb-4 sm:mb-0 shadow-xl"
          onClick={addTodo}>
          <span>Add</span>
        </div>
      </div>
    </form>
      {/* <input className='mx-6' type="text" onChange={(e) => {handleChange(e)}}/>
      <button className='' onClick={() => props.addTodo({
        //object /todo write here
        id: Math.floor(Math.random()*1000),
        item: todo,
        completed : false
      })}> + </button> */}
      <br />

      {/* <ul>
        {props.todos.map((item) => {
          return (
            
          );
        })}
      </ul> */}
    </div>
  )
}

export default connect(mapStateToProps , mapDispatchToProps)(Todos);
