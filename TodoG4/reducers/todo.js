import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  MARK_AS_DONE_TODO,
  NEW_TODO
} from "../actions/types";

import { getLabelById } from "./label";

const initialState = {
  byId: {
    1: {
      id: 1,
      title: "Title 1",
      description: "Description",
      done: false,
      labelId: 1
    },
    2: {
      id: 2,
      title: "Title 2",
      description: "Description",
      done: false,
      labelId: 1
    },
    3: {
      id: 3,
      title: "Title 3",
      description: "Description",
      done: false,
      labelId: 2
    }
  },

  ids: [1, 2, 3]
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO: {
      const newState = { ...state };
      delete newState[action.payload];
      newState.ids.splice(newState.ids.indexOf(action.payload), 1);
      return newState;
    }
    case MARK_AS_DONE_TODO: {
      const newState = { ...state };
      newState.byId[action.payload.id].done = action.payload.done;
      return newState;
    }
    case UPDATE_TODO: {
      const newState = {...state};
      newState.byId[action.payload.id] = action.payload;
      return newState;
    }
    case CREATE_TODO: {   
      const id = Math.max(...state.ids) + 1;
      const newItem = action.payload;
      newItem.id = id;
      newItem.done = false;
      newItem.labelId = newItem.labelId || 1;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: newItem
        },
        ids: [
          ...state.ids,
          id
        ]
      }
    }
    default:
      return state;
  }
};

const getTodos = state => state.todo.ids.map(id => state.todo.byId[id]);

const getTodosIds = state => state.todo.ids;

const getTodoById = (state, id) => state.todo.byId[id];

const getTodosForLabelId = (labelId, todo, result) => {
  const array = result[labelId] === undefined ? [] : result[labelId];
  return [...array, todo];
};
const getTodosByLabelName = state =>
  getTodos(state).reduce(
    (result, todo) => ({
      ...result,
      [getLabelById(state, todo.labelId).label]: getTodosForLabelId(
        getLabelById(state, todo.labelId).label,
        todo,
        result
      )
    }),
    {}
  );

export { todo, getTodos, getTodosIds, getTodoById, getTodosByLabelName };
