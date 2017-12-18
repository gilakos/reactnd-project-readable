import {
  ADD_POST,
  EDIT_POST,
  REMOVE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
} from '../actions'


function content (state, action){
  const { post, category, comment} = action

  switch(action.type){
    case ADD_POST:
      return {
        ...state
      }
    case EDIT_POST:
      return {
        ...state
      }
    case REMOVE_POST:
      return {
        ...state
      }
    case ADD_COMMENT:
      return {
        ...state
      }
    case EDIT_COMMENT:
      return {
        ...state
      }
    case REMOVE_COMMENT:
      return {
        ...state
      }
    default :
      return state
  }
}

export default content
