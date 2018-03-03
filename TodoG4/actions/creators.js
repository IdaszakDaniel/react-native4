import { DELETE_TODO } from './types';

const removeTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})