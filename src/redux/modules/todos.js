import { v4 as uuidv4 } from "uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [
  {
    id: uuidv4(),
    title: "제목1",
    contents: "내용1",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "제목2",
    contents: "내용2",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "제목3",
    contents: "내용3",
    isDone: false,
  },
];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload;
      return [newTodo, ...state];
    case DELETE_TODO:
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    case SWITCH_TODO:
      const { id, isDone } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !isDone };
        }
        return item;
      });
    default:
      return state;
  }
};

export default todos;
