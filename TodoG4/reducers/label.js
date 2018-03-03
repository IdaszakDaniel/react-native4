import { CREATE_LABEL, DELETE_LABEL } from "../actions/types";

const initialState = {
  byId: {
    1: { id: 1, label: "Important" },
    2: { id: 2, label: "Home" },
    3: { id: 3, label: "work" }
  },
  ids: [1, 2, 3]
};

const label = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_LABEL: {
      return state;
    }
    case CREATE_LABEL: {
      let newState = {...state};
      /**
       * TODO how inc id?
       */
      newState.byId[4] = { id: 4, label: action.payload };
      newState.ids.push(4);
      return newState;
    }
    default:
      return state;
  }
};

const getLabels = state => state.label.ids.map(id => state.label.byId[id]);

const getLabelById = (state, id) => state.label.byId[id];

export { label, getLabels, getLabelById };
