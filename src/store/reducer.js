import { ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_INPUT_VALUE } from './actionTypes'


const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push({
      value: newState.inputValue,
      timestamp: action.timestamp
    });
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState
  }
  return state;
}