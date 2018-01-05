//import relevant action constants
import {
  LOAD_CATEGORIES,
  CURRENT_CATEGORY,
} from '../actions/action_constants'

//define category reducer
const categories = (state = {}, action) => {
  const { categories, currentCategory } = action
  switch (action.type) {
    //return state and all categories
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories
      };
    //return state and current category
    case CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory
      }
    //default: return state
    default:
      return state;
  }
}

export default categories
