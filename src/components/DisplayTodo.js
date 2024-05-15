import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer'
import TodoItem from './TodoItem'

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

const DisplayTodo = (props) => {

    const [sort , setSort] = useState("active")

  return (
    <div>
        <div>
            <button onClick={() => setSort("active")}>Active</button>
            <button onClick={() => setSort("completed")}>Completed</button>
            <button onClick={() => setSort("all")}>All</button>
        </div>

        <ul>
            {/* for active task only */}
            {props.todos.length > 0 && sort === "active" ?
                props.todos.map(item => {
                    return (
                        item.completed === false && (
                            <TodoItem
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            />
                        )   
                    )
                }) : null
            }

            
        </ul>
    </div>
  )
}

export default connect(mapStateToProps , mapDispatchToProps)(DisplayTodo);
