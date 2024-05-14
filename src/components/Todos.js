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
    <div>
      <input type="text" onChange={(e) => {handleChange(e)}}/>
      <button className='' onClick={() => props.addTodo({
        //object /todo write here
        id: Math.floor(Math.random()*1000),
        item: todo,
        completed : false
      })}>Add</button>
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