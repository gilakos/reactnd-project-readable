//import relevant action constants
import {
  SET_SORT,
} from './action_constants'

export const defineSort = (orderby, sort) => ({
  type: SET_SORT,
  orderby,
  sort
})
