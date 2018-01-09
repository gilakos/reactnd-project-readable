//import relevant action constants
import {
  SET_SORT,
 } from '../actions/action_constants'

const sort = (state = {}, action) => {
  const { orderby, sort } = action
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        orderby,
        sort
      }

    default:
      return state
  }
}

export default sort
