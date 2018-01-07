//import relevant action constants
import {
  LOAD_POST,
  // ADD_POST,
  // EDIT_POST,
  // DELETE_POST,
} from '../actions/action_constants'

const post = (state = {}, action) => {
  const { post } = action
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        post
      }

    default:
      return state
  }
}

export default post
