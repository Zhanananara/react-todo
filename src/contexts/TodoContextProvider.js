import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8000/todos";
export const todoContext = createContext();

const INIT_STATE = {
  todos: [],
  forEdit: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };
    case "GET_ONE_FOR_EDIT":
      return {
        ...state,
        forEdit: action.payload,
      };
    default:
      return state;
  }
}
const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  async function getTodos() {
    try {
      let { data } = await axios(API);
      console.log(data);
      dispatch({
        type: "GET_TODOS",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const addNewTodo = async (newTodo) => {
    try {
      let res = await axios.post(API, newTodo);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    console.log(id, "id is delete");
    try {
      let res = await axios.delete(`${API}/${id}`);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const getOneTodoForEdit = async (id) => {
    try {
      let { data } = await axios.get(`${API}/${id}`); //по умолчанию get запрос
      dispatch({
        type: "GET_ONE_FOR_EDIT",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const saveEdit = async (editedTodo) => {
    try {
      let res = await axios.patch(`${API}/${editedTodo.id}`, editedTodo);
      getTodos();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        forEdit: state.forEdit,
        getTodos,
        addNewTodo,
        deleteTodo,
        getOneTodoForEdit,
        saveEdit,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
