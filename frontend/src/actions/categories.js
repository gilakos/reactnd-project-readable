import * as Api from "../utils/api"

//import relevant action constants
import {
  RECEIVE_CATEGORIES,
  CURRENT_CATEGORY,
} from './action_constants'

//get all categories
export const receive_categories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

//fetch all categories from the api
export const fetchCategories = () => dispatch => (
  Api.getCategories()
    .then(categories => dispatch(receive_categories(categories)))
    .catch(error => dispatch(error))
)

//get current category
export const currentCategory = (category) => {
  return {
    type: CURRENT_CATEGORY,
    category
  }
}
