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

  
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  // console.log("todo text consoled here --->>>" , props)
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
    </div>
  )
}

export default connect(mapStateToProps , mapDispatchToProps)(Todos);