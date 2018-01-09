//import relevant action constants
import {
  LOAD_COMMENT,
  LOAD_POST_COMMENTS,
  DELETE_COMMENT
 } from '../actions/action_constants'

//define comment reducer
const comments = (state = {}, action) => {
  const { comment } = action
  switch (action.type) {
    //return state and comments from post id
    case LOAD_POST_COMMENTS:
      const { parentId, comments } = action
      return {
        ...state,
        [parentId]: comments
      }
    //return state and new or updated comment
    case LOAD_COMMENT:
      const existingComment = state[comment.parentId].filter(
        c => c.id === comment.id
      ).length
      return {
        ...state,
        [comment.parentId]: existingComment
          ? state[comment.parentId].map(
              c => (c.id === comment.id ? comment : c)
            )
          : state[comment.parentId].concat(comment)
      }
    //retrun state with comment filtered out
    case DELETE_COMMENT:
      return {
        ...state,
        [comment.parentId]: state[comment.parentId].filter(
          c => c.id !== comment.id
        )
      }
    //default: return state
    default:
      return state
  }
}

export default comments
