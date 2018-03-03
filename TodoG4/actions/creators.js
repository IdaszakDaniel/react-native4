import { DELETE_TODO, CREATE_LABEL } from './types';

const removeTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

const addLabel = (label) => ({
    type: CREATE_LABEL,
    payload: label
})