import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer'
import TodoItem from './TodoItem'

const mapStateToProps = (state) => {
    return {
      todos : state
    }
  }
  
  

const DisplayTodo = (props) => {

    const [sort , setSort] = useState("active")

  return (
    <></>
  )
}

export default connect(mapStateToProps , mapDispatchToProps)(DisplayTodo);
