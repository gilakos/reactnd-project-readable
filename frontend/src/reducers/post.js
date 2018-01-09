//import relevant action constants
import {
  LOAD_POST,
  DELETE_POST,
} from '../actions/action_constants'

const post = (state = {}, action) => {
  const { post } = action
  switch (action.type) {
    //return state and new post
    case LOAD_POST:
      return {
        ...state,
        post
      }
    //return state with deleted post set to undefined
    case DELETE_POST:
      return {
        ...state,
        post: undefined
      }
    //default: return state
    default:
      return state
  }
}

export default post
