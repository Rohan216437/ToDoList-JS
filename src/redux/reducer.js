67.limport { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToDoReducer = createSlice({
    name : "todos",
    initialState,
    reducers : {
        
    }
})

export const { addTodos , removeTodos , updateTodos , completeTodos} = addToDoReducer.actions;
export const reducer = addToDoReducer.reducer;