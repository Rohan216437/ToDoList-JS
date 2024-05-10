import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToDoReducer = createSlice({
    name : "todos",
    initialState,
    reducers : {
        // add todo
        addTodos : (state , action) => {
            state.push(action.payload);
            return state
        },
        //remove todo
        removeTodos : (state , action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        //update todo
        updateTodos : (state , action) => {
            return state.map( todo => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        item : action.payload.item,
                    }
                }
                return todo;
            })
        },
        //completed todos
        completeTodos : (state , action ) => {
            return state.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed : true,
                    }
                }
                return todo;
            })
        }
    }
})

export const { addTodos , removeTodos , updateTodos , completeTodos} = addToDoReducer.actions;
export const reducer = addToDoReducer.reducer;