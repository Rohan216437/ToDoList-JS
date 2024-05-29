import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer'
import TodoItem from './TodoItem'
import { motion } from "framer-motion";


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
    // displays all todo items
    <div className='flex flex-col items-center'>
        <motion.div 
            className="flex w-6/12 justify-center pb-4" 
            variants={container}
            initial="hidden"
            animate="visible"
        >
            
           
        </motion.div>

        <ul class="list-none flex self-start flex-wrap ml-[5%]">
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

            {/* for commpleeted task only  */}
            {props.todos.length > 0 && sort === "completed" ?
                props.todos.map(item => {
                    return (
                        item.completed === true && (
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

            {/* for all task together */}
            {props.todos.length > 0 && sort === "all" ?
                props.todos.map(item => {
                    return (
                        <TodoItem
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    )
                }) : null
            }
        </ul>
    </div>
  )
}

export default connect(mapStateToProps , mapDispatchToProps)(DisplayTodo);
