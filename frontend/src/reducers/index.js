import { combineReducers } from 'redux'

//import all reducers
import categories from './categories'
import posts from './posts'
import post from './post'
import comments from './comments'
import vote from './vote'
import sort from './sort'

//combine reducers into a single root reducer
const rootReducer = combineReducers({
  categories,
  posts,
  post,
  comments,
  vote,
  sort,
})

export default rootReducer
