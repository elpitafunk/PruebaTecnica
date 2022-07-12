import { types } from "../../type";

const init = {
  todo: [],
  inprogress: [],
  done: []
}


export const taskRed = (state=init,action) => {
  switch(action.type) {
    case types:
      return {
        todo: action.payload.todo,
        inprogress: action.payload.inprogress,
        done: action.payload.done
      }
    default:
      return state;
  }
}