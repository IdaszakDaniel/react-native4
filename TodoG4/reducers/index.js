import { combineReducers } from 'redux';
import { todo } from './todo';
import { label } from './label';


const reducers = {
 label,
 todo,
};

const appReducer = combineReducers(reducers);

export { appReducer as reducers };
