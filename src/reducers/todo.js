import {GET_TODOS} from "../actions/getTodos";

const initialState = {
  todos: []
};

export default function todoReducer(state = initialState, action) {
  if (action.type === GET_TODOS) {
    return {
      ...state,
      todos: action.payload
    }
  } else {
    return state;
  }
}