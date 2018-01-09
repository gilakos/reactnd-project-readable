//import relevant action constants
import {
  LOAD_VOTE,
 } from '../actions/action_constants'

 const vote = (state = {}, action) => {
  const { id, score } = action
  switch (action.type) {
    case LOAD_VOTE:
      return {
        ...state,
        [id]: score
      }

    default:
      return state
  }
}

export default vote
