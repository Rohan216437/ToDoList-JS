import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

const DisplayTodo = (props) => {
    const [sort, setSort] = useState("active");

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

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <motion.div
                className="flex w-6/12 justify-center pb-4"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.button
                    variants={item}
                    animate={{
                        padding: sort === "active" ? "20px 20px" : "8px 16px",
                        fontSize: sort === "active" ? "1.125rem" : "0.875rem",
                        width: sort === "active" ? "100px" : "auto"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`item mx-2 text-center font-medium bg-white text-cyan-800 rounded-2xl cursor-pointer hover:bg-gray-100 hover:text-cyan-800 dark:text-cyan-800 dark:hover:text-cyan-800 mb-4 sm:mb-0 shadow-xl`}
                    onClick={() => setSort("active")}
                >
                    Active
                </motion.button>
                <motion.button
                    variants={item}
                    animate={{
                        padding: sort === "completed" ? "20px 20px" : "8px 16px",
                        fontSize: sort === "completed" ? "1.125rem" : "0.875rem",
                        width: sort === "completed" ? "150px" : "auto"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`item mx-2 text-center font-medium bg-white text-cyan-800 rounded-2xl cursor-pointer hover:bg-gray-100 hover:text-cyan-800 dark:text-cyan-800 dark:hover:text-cyan-800 mb-4 sm:mb-0 shadow-xl`}
                    onClick={() => setSort("completed")}
                >
                    Completed
                </motion.button>
                <motion.button
                    variants={item}
                    animate={{
                        padding: sort === "all" ? "20px 20px" : "8px 16px",
                        fontSize: sort === "all" ? "1.125rem" : "0.875rem",
                        width: sort === "all" ? "100px" : "auto"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`item mx-2 text-center font-medium bg-white text-cyan-800 rounded-2xl cursor-pointer hover:bg-gray-100 hover:text-cyan-800 dark:text-cyan-800 dark:hover:text-cyan-800 mb-4 sm:mb-0 shadow-xl`}
                    onClick={() => setSort("all")}
                >
                    All
                </motion.button>
            </motion.div>

            <ul className="list-none flex self-start flex-wrap ml-[5%]">
                {props.todos.length > 0 && sort === "active" &&
                    props.todos.map(item => (
                        !item.completed && (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    ))
                }

                {props.todos.length > 0 && sort === "completed" &&
                    props.todos.map(item => (
                        item.completed && (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    ))
                }

                {props.todos.length > 0 && sort === "all" &&
                    props.todos.map(item => (
                        <TodoItem
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);
