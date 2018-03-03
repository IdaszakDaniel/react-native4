import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from "../actions/types";

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
      labelId: 1
    }
  },

  ids: [1, 2, 3]
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      return state;
    }
    case DELETE_TODO: {
      return state;
    }
    case UPDATE_TODO: {
      return state;
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
      [getLabelById(state,todo.labelId)]: getTodosForLabelId(
        todo.labelId,
        todo,
        result
      )
    }),
    {}
  );

export { todo, getTodos, getTodosIds, getTodoById,getTodosByLabelName };
