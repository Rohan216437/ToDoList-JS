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

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
    

  return (  
    // displays all todo items
    <div className='flex flex-col items-center'>
        <motion.div 
            className="flex w-6/12 justify-center pb-4" 
            variants={container}
            initial="hidden"
            animate="visible"
        >
            
            <motion.button 
                variants={item}
                class=" item w-full mx-2 text-center py-3 px-8 text-sm font-medium bg-white text-cyan-800 rounded-2xl cursor-pointer sm:w-min hover:bg-gray-100 hover:text-cyan-800  dark:text-cyan-800 dark:hover:text-cyan-800 mb-4 sm:mb-0 shadow-xl"
                onClick={() => setSort("active")}>Active</motion.button>
            <motion.button
                variants={item} 
                class="item w-full mx-2 text-center py-3 px-8 text-sm font-medium bg-white text-cyan-800 rounded-2xl cursor-pointer sm:w-min hover:bg-gray-100 hover:text-cyan-800  dark:text-cyan-800 dark:hover:text-cyan-800 mb-4 sm:mb-0 shadow-xl"
                onClick={() => setSort("completed")}>Completed</motion.button>
            <motion.button
                variants={item} 
                class="item w-full mx-2 text-center py-3 px-8 text-sm font-medium bg-white text-cyan-800 rounded-2xl cursor-pointer sm:w-min hover:bg-gray-100 hover:text-cyan-800  dark:text-cyan-800 dark:hover:text-cyan-800 mb-4 sm:mb-0 shadow-xl"
                onClick={() => setSort("all")}>All</motion.button>
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
