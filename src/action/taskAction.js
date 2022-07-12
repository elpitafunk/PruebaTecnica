import { types } from "../../type"

export const insertData = (todo,inprogress,done) => {
  return {
    type: types.inserData,
    payload: {
      todo,
      inprogress,
      done
    }
  }
}